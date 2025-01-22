<?php

namespace App\Content\Spotify;

use App\Content\Spotify\Representation\SpotifyTrack;
use App\Entity\Participant;
use App\Entity\SpotifyAccessToken;
use App\Message\RestoreSpotifyQueue;
use App\Repository\SpotifyAccessTokenRepository;
use DateTime;
use SpotifyWebAPI\Session;
use SpotifyWebAPI\SpotifyWebAPI;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Component\Messenger\Stamp\DelayStamp;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class SpotifyService
{
    const STORE_TOKEN_URL = 'https://www.wh-company.de/spotify/callback.php';
    const FETCH_TOKEN_URL = 'https://www.wh-company.de/spotify/fetch.php';

    const CLIENT_ID = '674bca2e71284896ae7fd7e60ca8dfff';
    const CLIENT_SECRET = 'd23dfc9982974916a40f1f6cdec947fc';
//    const REDIRECT_URI = 'https://wh-company.de/spotify/callback.php';
    const REDIRECT_URI = 'http://localhost:8000/spotify/callback';

    private ?SpotifyWebAPI $api = null;

    public function __construct(
        private readonly SpotifyAccessTokenRepository $spotifyAccessTokenRepository,
        private readonly MessageBusInterface $messageBus
    ) {
    }

    private function getApi(): SpotifyWebAPI
    {
        if ($this->api === null) {
            $api = new SpotifyWebAPI();
            $api->setAccessToken($this->getValidAccessToken()->getAccessToken());

            $this->api = $api;
        }

        return $this->api;
    }

    public function createAccessToken(string $authorizationCode): void
    {
        $session = new Session(
            self::CLIENT_ID,
            self::CLIENT_SECRET,
            self::REDIRECT_URI
        );

        $session->requestAccessToken($authorizationCode);

        $accessToken = $session->getAccessToken();
        $refreshToken = $session->getRefreshToken();

        $spotifyAccessToken = $this->storeTokensToDb($accessToken, $refreshToken, $session->getTokenExpiration());
    }


    public function getOauthToken(): string
    {
        $session = new Session(
            self::CLIENT_ID,
            self::CLIENT_SECRET,
            self::REDIRECT_URI
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

    public function storeTokensToDb(string $accessToken, string $refreshToken, int $expiration): SpotifyAccessToken
    {
        $spotifyAccessToken = new SpotifyAccessToken();
        $spotifyAccessToken->setAccessToken($accessToken);
        $spotifyAccessToken->setRefreshToken($refreshToken);
        $spotifyAccessToken->setExpirationDate($expiration);

        $this->spotifyAccessTokenRepository->save($spotifyAccessToken);

        return $spotifyAccessToken;
    }

    /**
     * @throws NoAccessTokenFoundException
     */
    public function getValidAccessToken(): SpotifyAccessToken
    {
        // get current tokens
        $spotifyAccessToken = $this->spotifyAccessTokenRepository->getNewestToken();

        // check if current token is valid
        $currentTime = (new DateTime())->getTimestamp();
        $expirationDate = $spotifyAccessToken->getExpirationDate();
        if ($currentTime < $expirationDate) {
            return $spotifyAccessToken;
        }

        $session = new Session(
            self::CLIENT_ID,
            self::CLIENT_SECRET,
            self::REDIRECT_URI
        );

        $session->setAccessToken($spotifyAccessToken->getAccessToken());
        $session->setRefreshToken($spotifyAccessToken->getRefreshToken());

        // refresh access token and store it in db
        $session->refreshAccessToken();

        return $this->storeTokensToDb(
            $session->getAccessToken(),
            $session->getRefreshToken(),
            $session->getTokenExpiration()
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

    public function breakQueueWithGoalHymn(string $trackId, int $startTime, int $playTimeInSeconds = 10): bool
    {
//        dd($playTimeInSeconds * 1000);
        $api = $this->getApi();

        // save current song info
        $currentSongInfo = $api->getMyCurrentPlaybackInfo();
//dd($api->getMyDevices());
        $currentSongId = $currentSongInfo->item->id;
        $currentSongProgress = $currentSongInfo->progress_ms;

        $api->queue($trackId);

        $api->next();
        $api->seek(['position_ms' => $startTime * 1000]);

        $api->queue($currentSongId);

        $message = new RestoreSpotifyQueue($currentSongId, $currentSongProgress);


        $this->messageBus->dispatch($message, [new DelayStamp($playTimeInSeconds * 1000)]);

//        $api->next(['position_ms' => 10000]);


        dd($api->getMyQueue());
    }

    public function restoreSpotifyQueueAsBeforeGoalHymnBreak(int $progress): void
    {
        $this->api = null;
        $api = $this->getApi();

        // Move to the requeued current song and set playback position
        $api->next();
        $api->seek(['position_ms' => $progress]);
    }

    /**
     * @return array<SpotifyTrack>
     */
    public function search($searchTerm): array
    {
        $api = $this->getApi();

        $response = $api->search($searchTerm, ['track'], ['return_assoc' => true, 'market' => 'DE']);
;
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

    public function getGoalHymnForParticipant(Participant $participant): SpotifyTrack
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