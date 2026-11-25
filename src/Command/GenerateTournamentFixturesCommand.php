<?php

namespace App\Command;

use App\Content\Tournament\TournamentService;
use App\Entity\Tournament;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

#[AsCommand(name: 'app:generate-tournament-fixtures')]
class GenerateTournamentFixturesCommand extends Command
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private TournamentService $tournamentService,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this->setDescription('Generate rounds and fixtures for the tournament');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        // Fetch the tournament
        $tournamentRepo = $this->entityManager->getRepository(Tournament::class);
        $tournament = $tournamentRepo->findOneBy(['ident' => 'Sample Tournament']);

        if (!$tournament) {
            $output->writeln('<error>Tournament not found!</error>');
            return Command::FAILURE;
        }

        // Calculate Rounds and Fixtures
        $this->tournamentService->calculateRoundsForTournament($tournament);

        $output->writeln('<info>Successfully generated tournament rounds and fixtures.</info>');
        return Command::SUCCESS;
    }
}
