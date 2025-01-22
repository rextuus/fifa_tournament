<?php

namespace App\Content\Team;

use Symfony\Component\DomCrawler\Crawler;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class FifaTeamsCrawler
{
    private HttpClientInterface $httpClient;

    private const TEAMS_URL = 'https://www.fifaratings.com/teams'; // Base URL for teams listing

    public function __construct(HttpClientInterface $httpClient)
    {
        $this->httpClient = $httpClient;
    }

    /**
     * Crawl and fetch all teams with their details (logos and names).
     *
     * @return array an array of teams with their names, images, and links
     *
     * @throws \RuntimeException when the page cannot be fetched or data is unavailable
     */
    public function getAllTeams(): array
    {
        // Fetch the teams page content
        $response = $this->httpClient->request('GET', self::TEAMS_URL);

        if (200 !== $response->getStatusCode()) {
            throw new \RuntimeException('Failed to fetch the FIFA Teams page.');
        }

        $htmlContent = $response->getContent();

        // Use DomCrawler to parse the HTML
        $crawler = new Crawler($htmlContent);

        // Find all team rows in the table
        $teams = $crawler->filter('tbody > tr')->each(function (Crawler $node) {
            // Extract team name
            $teamNameNode = $node->filter('td .entries .entry-font a');
            $teamName = $teamNameNode->count() > 0 ? $teamNameNode->text() : 'Unknown';

            // Extract team URL
            $teamUrl = $teamNameNode->count() > 0 ? $teamNameNode->attr('href') : null;

            // Extract league
            $leagueNode = $node->filter('td .entries .entry-subtext-font a');
            $league = $leagueNode->count() > 0 ? $leagueNode->text() : 'Unknown';

            // Extract lazy-loaded image URL
            $imageNode = $node->filter('td .entries a .entry-bg-team img');
            $imageUrl = $imageNode->count() > 0 ? $imageNode->attr('data-src') : null;

            return [
                'name' => $teamName,
                'url' => $teamUrl,
                'league' => $league,
                'image' => $imageUrl,
            ];
        });

        $teams = array_filter($teams, function (array $team) {
            return 'Unknown' !== $team['name'];
        });

        if (empty($teams)) {
            throw new \RuntimeException('No teams were found on the page.');
        }

        return $teams;
    }
}
