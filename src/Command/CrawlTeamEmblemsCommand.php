<?php

namespace App\Command;

use App\Content\Team\StarRating;
use App\Content\Team\TeamImportService;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class CrawlTeamEmblemsCommand extends Command
{
    protected static $defaultName = 'app:crawl-team-emblems';

    public function __construct(
        private readonly TeamImportService $teamImporterService
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->setDescription('Crawl team emblems');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $this->teamImporterService->processImagesForTeams();

        $io->success('Team emböems crawled and saved successfully!');

        return Command::SUCCESS;
    }
}
