<?php

namespace App\Command;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class CreateDefaultUserCommand extends Command
{
    protected static $defaultName = 'app:create-default-user';

    public function __construct(
        private EntityManagerInterface $entityManager,
        private UserPasswordHasherInterface $passwordHasher
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->setDescription('Creates a default user with a specified email and password.')
            ->addArgument('email', InputArgument::REQUIRED, 'The email for the default user.')
            ->addArgument('password', InputArgument::REQUIRED, 'The password for the default user.');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $email = $input->getArgument('email');
        $password = $input->getArgument('password');

        // Validate email format
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $output->writeln('<error>Invalid email format.</error>');
            return Command::FAILURE;
        }

        // Check if a user with the email already exists
        $existingUser = $this->entityManager->getRepository(User::class)
            ->findOneBy(['email' => $email]);
        if ($existingUser) {
            $output->writeln('<error>A user with the email "' . $email . '" already exists.</error>');
            return Command::FAILURE;
        }

        // Validate password
        if (!$password || strlen($password) < 6) {
            $output->writeln('<error>Password must be at least 6 characters long.</error>');
            return Command::FAILURE;
        }

        // Create and set up the new user
        $user = new User();
        $user->setEmail($email);
        $hashedPassword = $this->passwordHasher->hashPassword($user, $password);
        $user->setPassword($hashedPassword);

        // Persist the user
        try {
            $this->entityManager->persist($user);
            $this->entityManager->flush();

            $output->writeln('<info>Default user with email "' . $email . '" created successfully!</info>');
            return Command::SUCCESS;
        } catch (\Exception $e) {
            $output->writeln('<error>An error occurred while creating the default user: ' . $e->getMessage() . '</error>');
            return Command::FAILURE;
        }
    }
}