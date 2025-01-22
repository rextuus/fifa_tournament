<?php

namespace App\Command;

use App\Content\Team\StarRating;
use App\Content\Team\TeamImportService;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class CrawlTeamsCommand extends Command
{
    protected static $defaultName = 'app:crawl-teams';

    public function __construct(
        private TeamImportService $teamImporterService
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->setDescription('Crawl teams from FIFA Index')
            ->addArgument('stars', InputArgument::REQUIRED, 'Number of stars to filter (e.g., 3)');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $stars = StarRating::tryFrom($input->getArgument('stars'));

        if (null === $stars) {
            $io->error('Star rating does not exist');
            return Command::FAILURE;
        }

        $this->teamImporterService->importTeams($stars);

        $io->success('Teams crawled and saved successfully!');

        return Command::SUCCESS;
    }
}
