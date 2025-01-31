<?php

namespace App\Content\Spotify;

use App\Content\Spotify\Representation\SpotifyTrack;
use App\Entity\Base\GoalHymnAwareInterface;
use App\Entity\Participant;
use App\Entity\SpotifyAccessToken;
use App\Entity\User;
use App\Message\RestoreSpotifyQueue;
use App\Repository\SpotifyAccessTokenRepository;
use DateTime;
use SpotifyWebAPI\Session;
use SpotifyWebAPI\SpotifyWebAPI;
use SpotifyWebAPI\SpotifyWebAPIException;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Component\Messenger\Stamp\DelayStamp;

class SpotifyService
{
    private ?SpotifyWebAPI $api = null;

    public function __construct(
        private readonly SpotifyAccessTokenRepository $spotifyAccessTokenRepository,
        private readonly MessageBusInterface $messageBus,
        private readonly Security $security,
        #[Autowire('%env(SPOTIFY_CLIENT_ID)%')]
        private readonly string $clientId,
        #[Autowire('%env(SPOTIFY_CLIENT_SECRET)%')]
        private readonly string $clientSecret,
        #[Autowire('%env(SPOTIFY_REDIRECT_URI)%')]
        private readonly string $redirectUri
    ) {
    }

    private function getApi(?User $user = null): SpotifyWebAPI
    {
        if ($this->api === null) {
            $api = new SpotifyWebAPI();
            $api->setAccessToken($this->getValidAccessToken($user)->getAccessToken());

            $this->api = $api;
        }

        return $this->api;
    }

    public function createAccessToken(string $authorizationCode, User $user): void
    {
        $session = new Session(
            $this->clientId,
            $this->clientSecret,
            $this->redirectUri
        );

        $session->requestAccessToken($authorizationCode);

        $accessToken = $session->getAccessToken();
        $refreshToken = $session->getRefreshToken();

        $this->storeTokensToDb($accessToken, $refreshToken, $session->getTokenExpiration(), $user);
    }


    public function getOauthToken(): string
    {
        $session = new Session(
            $this->clientId,
            $this->clientSecret,
            $this->redirectUri
        );

        $state = $session->generateState();
        $options = [
            'scope' => [
                'user-library-modify',
                'user-read-playback-position',
                'user-read-recently-played',
                'user-read-playback-state',
                'user-read-currently-playing',
                'user-modify-playback-state',
                'user-read-private',
                'user-read-email',
            ],
            'state' => $state,
        ];

        return $session->getAuthorizeUrl($options);
    }

    public function storeTokensToDb(
        string $accessToken,
        string $refreshToken,
        int $expiration,
        User $user
    ): SpotifyAccessToken {
        $spotifyAccessToken = new SpotifyAccessToken();
        $spotifyAccessToken->setAccessToken($accessToken);
        $spotifyAccessToken->setRefreshToken($refreshToken);
        $spotifyAccessToken->setExpirationDate($expiration);
        $spotifyAccessToken->setUser($user);

        $this->spotifyAccessTokenRepository->save($spotifyAccessToken);

        return $spotifyAccessToken;
    }

    public function checkSpotifyIsLoggedIn(): bool
    {
        try {
            $spotifyAccessToken = $this->spotifyAccessTokenRepository->getNewestToken(
                $this->security->getUser()
            );
        } catch (NoAccessTokenFoundException $e) {
            return false;
        }

        return true;
    }

    /**
     * @throws NoAccessTokenFoundException
     */
    public function getValidAccessToken(?User $user = null): SpotifyAccessToken
    {
        // get current tokens
        if ($user === null) {
            $user = $this->security->getUser();
        }

        $spotifyAccessToken = $this->spotifyAccessTokenRepository->getNewestToken(
            $user
        );

        // check if current token is valid
        $currentTime = (new DateTime())->getTimestamp();
        $expirationDate = $spotifyAccessToken->getExpirationDate();
        if ($currentTime < $expirationDate) {
            return $spotifyAccessToken;
        }

        $session = new Session(
            $this->clientId,
            $this->clientSecret,
            $this->redirectUri
        );

        $session->setAccessToken($spotifyAccessToken->getAccessToken());
        $session->setRefreshToken($spotifyAccessToken->getRefreshToken());

        // refresh access token and store it in db
        $session->refreshAccessToken();

        // save the new accessToken with same as in the expired one
        return $this->storeTokensToDb(
            $session->getAccessToken(),
            $session->getRefreshToken(),
            $session->getTokenExpiration(),
            $spotifyAccessToken->getUser()
        );
    }

    public function getImageUrlOfCurrentlyPlayingSong(): array
    {
        $api = new SpotifyWebAPI();
        $api->setAccessToken($this->getValidAccessToken());
        $currentTrack = json_decode(json_encode($api->getMyCurrentTrack()), true);
        if (!array_key_exists('item', $currentTrack)) {
            return [];
        }
        return ['url' => $currentTrack['item']['album']['images'][0]['url'], 'name' => $currentTrack['item']['name']];
    }

    public function stopTrack(): array
    {
        $api = new SpotifyWebAPI();
        $api->setAccessToken($this->getValidAccessToken()->getAccessToken());

        $currentTrack = json_decode(json_encode($api->pause()), true);
        if (!array_key_exists('item', $currentTrack)) {
            return [];
        }
        return ['url' => $currentTrack['item']['album']['images'][0]['url'], 'name' => $currentTrack['item']['name']];
    }

    public function seekToPosition(): bool
    {
        $api = $this->getApi();

        return $api->seek(['position_ms' => 10000]);
    }

    public function breakQueueWithGoalHymn(
        int $fixtureId,
        string $trackId,
        int $startTime,
        int $playTimeInSeconds = 10
    ): bool {
        $api = $this->getApi();

        // save current song info
        $currentSongInfo = $api->getMyCurrentPlaybackInfo();
        $playlistWasInterrupted = false;
        $currentSongId = null;
        $currentSongProgress = null;
        if ($currentSongInfo !== null) {
            $playlistWasInterrupted = true;
            $currentSongId = $currentSongInfo->item->id;
            $currentSongProgress = $currentSongInfo->progress_ms;

        }

        try {
            $api->queue($trackId);
        } catch (SpotifyWebAPIException $e) {
            if ($e->getMessage() === 'Player command failed: No active device found'){
                $devices = $api->getMyDevices()->devices;
                $id = $devices[0]->id;

                $api->play($id);
                $api->queue($trackId);
            }
        }

        $api->next();
        $api->seek(['position_ms' => $startTime * 1000]);

        $api->queue($currentSongId);

        $user = $this->security->getUser();

        $message = new RestoreSpotifyQueue(
            $fixtureId,
            $user->getId(),
            $currentSongId,
            $currentSongProgress,
            $playlistWasInterrupted
        );

        $this->messageBus->dispatch($message, [new DelayStamp($playTimeInSeconds * 1000)]);

        return true;
    }

    public function restoreSpotifyQueueAsBeforeGoalHymnBreak(
        int $progress,
        User $user,
        bool $playlistWasInterrupted
    ): void {
        $this->api = null;
        $api = $this->getApi($user);

        // Move to the requeued current song and set playback position
        if ($playlistWasInterrupted){
            $api->next();
            $api->seek(['position_ms' => $progress]);
        }else{
            $api->pause();
        }
    }

    /**
     * @return array<SpotifyTrack>
     */
    public function search($searchTerm): array
    {
        $api = $this->getApi();

        $response = $api->search($searchTerm, ['track'], ['return_assoc' => true, 'market' => 'DE']);

        $tracks = [];
        foreach ($response->tracks->items as $item) {
            $tracks[] = new SpotifyTrack(
                $item->name,
                $item->artists[0]->name,
                $item->album->name,
                $item->album->images[0]->url,
                $item->id,
                $item->duration_ms,
            );
        }

        return $tracks;
    }

    public function getGoalHymnForParticipant(GoalHymnAwareInterface $participant): SpotifyTrack
    {
        $api = $this->getApi();

        $track = $api->getTrack($participant->getGoalHymnSpotifyId());

        return new SpotifyTrack(
            $track->name,
            $track->artists[0]->name,
            $track->album->name,
            $track->album->images[0]->url,
            $track->id,
            $track->duration_ms,
        );
    }

    public function getTrackById(string $spotifyTrackId): SpotifyTrack
    {
        $api = $this->getApi();

        $track = $api->getTrack($spotifyTrackId);

        return new SpotifyTrack(
            $track->name,
            $track->artists[0]->name,
            $track->album->name,
            $track->album->images[0]->url,
            $track->id,
            $track->duration_ms,
        );
    }

    public function getLoginInformation(): string
    {
        $api = $this->getApi();

        $me = $api->me();

        return $me->display_name;
    }

    public function logOut(): string
    {
        $api = $this->getApi();


        return $me->display_name;
    }
}