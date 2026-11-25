<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Ausgangsschema (bis 11/2026 gab es keine Migrationen; securitas lief mit schema:update).
 *
 * Leere Datenbank: legt alle Tabellen an. Datenbank aus dem securitas-Dump: Die Tabellen gibt es schon, die
 * Migration wird übersprungen und nur als ausgeführt vermerkt. Ob der Dump zum Mapping passt, zeigt danach
 * `doctrine:schema:validate` (docs/deployment.md, Umzug).
 */
final class Version20261125000000 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Ausgangsschema (Turniere, Teams, Spieler, Dateien, Spotify-Tokens)';
    }

    public function up(Schema $schema): void
    {
        // Nicht skipIf(): übersprungene Migrationen würden nicht als ausgeführt vermerkt und bei jedem Deploy erneut
        // angeboten. So steht sie nach dem Import in doctrine_migration_versions, ohne etwas zu ändern.
        if ($schema->hasTable('tournament')) {
            $this->write('Schema existiert bereits (Import von securitas) – nur als ausgeführt vermerkt.');

            return;
        }

        $this->addSql(<<<'SQL'
                CREATE TABLE battle_round (
                    id INT AUTO_INCREMENT NOT NULL,
                    fixture_order JSON NOT NULL,
                    tournament_id INT NOT NULL,
                    UNIQUE INDEX UNIQ_DCD5BB8633D1A3E7 (tournament_id),
                    PRIMARY KEY (id)
                ) DEFAULT CHARACTER SET utf8mb4
            SQL);
        $this->addSql(<<<'SQL'
                CREATE TABLE battle_round_participant (
                    battle_round_id INT NOT NULL,
                    participant_id INT NOT NULL,
                    INDEX IDX_31791C087271F3F6 (battle_round_id),
                    INDEX IDX_31791C089D1C3019 (participant_id),
                    PRIMARY KEY (battle_round_id, participant_id)
                ) DEFAULT CHARACTER SET utf8mb4
            SQL);
        $this->addSql(<<<'SQL'
                CREATE TABLE battle_round_player (
                    battle_round_id INT NOT NULL,
                    player_id INT NOT NULL,
                    INDEX IDX_D77657907271F3F6 (battle_round_id),
                    INDEX IDX_D776579099E6F5DF (player_id),
                    PRIMARY KEY (battle_round_id, player_id)
                ) DEFAULT CHARACTER SET utf8mb4
            SQL);
        $this->addSql(<<<'SQL'
                CREATE TABLE file (
                    name VARCHAR(64) NOT NULL,
                    extension VARCHAR(16) NOT NULL,
                    type VARCHAR(255) NOT NULL,
                    image_type VARCHAR(255) DEFAULT NULL,
                    path VARCHAR(256) NOT NULL,
                    filesystem_ident VARCHAR(50) NOT NULL,
                    id INT AUTO_INCREMENT NOT NULL,
                    created DATETIME NOT NULL,
                    edited DATETIME DEFAULT NULL,
                    uploader_id INT DEFAULT NULL,
                    INDEX IDX_8C9F361016678C77 (uploader_id),
                    PRIMARY KEY (id)
                ) DEFAULT CHARACTER SET utf8mb4
            SQL);
        $this->addSql(<<<'SQL'
                CREATE TABLE fixture (
                    id INT AUTO_INCREMENT NOT NULL,
                    ident VARCHAR(255) NOT NULL,
                    played DATETIME DEFAULT NULL,
                    is_two_leg TINYINT DEFAULT 0 NOT NULL,
                    is_goal_music_running TINYINT DEFAULT 0 NOT NULL,
                    home_goals INT DEFAULT 0 NOT NULL,
                    away_goals INT DEFAULT 0 NOT NULL,
                    scorers JSON NOT NULL,
                    home_team_id INT DEFAULT NULL,
                    away_team_id INT DEFAULT NULL,
                    home_participant_id INT DEFAULT NULL,
                    away_participant_id INT DEFAULT NULL,
                    round_id INT NOT NULL,
                    first_leg_id INT DEFAULT NULL,
                    second_leg_id INT DEFAULT NULL,
                    third_leg_id INT DEFAULT NULL,
                    UNIQUE INDEX UNIQ_5E540EE4023EF3F (first_leg_id),
                    UNIQUE INDEX UNIQ_5E540EE55E96BB9 (second_leg_id),
                    UNIQUE INDEX UNIQ_5E540EED5001CEB (third_leg_id),
                    INDEX IDX_5E540EE9C4C13F6 (home_team_id),
                    INDEX IDX_5E540EE45185D02 (away_team_id),
                    INDEX IDX_5E540EE1D64E812 (home_participant_id),
                    INDEX IDX_5E540EE2EC802DC (away_participant_id),
                    INDEX IDX_5E540EEA6005CA0 (round_id),
                    PRIMARY KEY (id)
                ) DEFAULT CHARACTER SET utf8mb4
            SQL);
        $this->addSql(<<<'SQL'
                CREATE TABLE participant (
                    id INT AUTO_INCREMENT NOT NULL,
                    ident VARCHAR(255) NOT NULL,
                    goal_hymn_spotify_id VARCHAR(255) DEFAULT NULL,
                    goal_hymn_start_time INT DEFAULT 0 NOT NULL,
                    goal_hymn_end_time INT DEFAULT 0 NOT NULL,
                    force_goal_hymn TINYINT DEFAULT 0 NOT NULL,
                    file_id INT DEFAULT NULL,
                    UNIQUE INDEX UNIQ_D79F6B1193CB796C (file_id),
                    PRIMARY KEY (id)
                ) DEFAULT CHARACTER SET utf8mb4
            SQL);
        $this->addSql(<<<'SQL'
                CREATE TABLE participant_player (
                    participant_id INT NOT NULL,
                    player_id INT NOT NULL,
                    INDEX IDX_2A65C4E49D1C3019 (participant_id),
                    INDEX IDX_2A65C4E499E6F5DF (player_id),
                    PRIMARY KEY (participant_id, player_id)
                ) DEFAULT CHARACTER SET utf8mb4
            SQL);
        $this->addSql(<<<'SQL'
                CREATE TABLE player (
                    id INT AUTO_INCREMENT NOT NULL,
                    ident VARCHAR(255) NOT NULL,
                    goal_hymn_spotify_id VARCHAR(255) DEFAULT NULL,
                    goal_hymn_start_time INT DEFAULT 0 NOT NULL,
                    goal_hymn_end_time INT DEFAULT 0 NOT NULL,
                    force_goal_hymn TINYINT DEFAULT 0 NOT NULL,
                    file_id INT DEFAULT NULL,
                    UNIQUE INDEX UNIQ_98197A6593CB796C (file_id),
                    PRIMARY KEY (id)
                ) DEFAULT CHARACTER SET utf8mb4
            SQL);
        $this->addSql(<<<'SQL'
                CREATE TABLE result (
                    id INT AUTO_INCREMENT NOT NULL,
                    home_goals INT NOT NULL,
                    away_goals INT NOT NULL,
                    player_goals JSON NOT NULL,
                    played DATETIME DEFAULT NULL,
                    PRIMARY KEY (id)
                ) DEFAULT CHARACTER SET utf8mb4
            SQL);
        $this->addSql(<<<'SQL'
                CREATE TABLE round (
                    id INT AUTO_INCREMENT NOT NULL,
                    nr INT NOT NULL,
                    number_of_fixtures INT NOT NULL,
                    processed TINYINT NOT NULL,
                    round_type VARCHAR(255) NOT NULL,
                    tournament_id INT NOT NULL,
                    INDEX IDX_C5EEEA3433D1A3E7 (tournament_id),
                    PRIMARY KEY (id)
                ) DEFAULT CHARACTER SET utf8mb4
            SQL);
        $this->addSql(<<<'SQL'
                CREATE TABLE setting (
                    id INT AUTO_INCREMENT NOT NULL,
                    maximum_song_duration INT NOT NULL,
                    song_play_time_limit INT NOT NULL,
                    goal_music_enabled TINYINT NOT NULL,
                    goal_gif_enabled TINYINT NOT NULL,
                    queue_check DATETIME DEFAULT NULL,
                    user_id INT NOT NULL,
                    UNIQUE INDEX UNIQ_9F74B898A76ED395 (user_id),
                    PRIMARY KEY (id)
                ) DEFAULT CHARACTER SET utf8mb4
            SQL);
        $this->addSql(<<<'SQL'
                CREATE TABLE spotify_access_token (
                    id INT AUTO_INCREMENT NOT NULL,
                    access_token VARCHAR(1000) NOT NULL,
                    refresh_token VARCHAR(1000) NOT NULL,
                    expiration_date INT NOT NULL,
                    user_id INT NOT NULL,
                    INDEX IDX_32320EC3A76ED395 (user_id),
                    PRIMARY KEY (id)
                ) DEFAULT CHARACTER SET utf8mb4
            SQL);
        $this->addSql(<<<'SQL'
                CREATE TABLE team (
                    id INT AUTO_INCREMENT NOT NULL,
                    name VARCHAR(255) NOT NULL,
                    league VARCHAR(255) NOT NULL,
                    stars VARCHAR(255) NOT NULL,
                    image_link LONGTEXT NOT NULL,
                    team_link LONGTEXT NOT NULL,
                    file_id INT DEFAULT NULL,
                    UNIQUE INDEX UNIQ_C4E0A61F93CB796C (file_id),
                    PRIMARY KEY (id)
                ) DEFAULT CHARACTER SET utf8mb4
            SQL);
        $this->addSql(<<<'SQL'
                CREATE TABLE team_list (
                    id INT AUTO_INCREMENT NOT NULL,
                    tournament_id INT NOT NULL,
                    participant_id INT NOT NULL,
                    INDEX IDX_95290C6333D1A3E7 (tournament_id),
                    INDEX IDX_95290C639D1C3019 (participant_id),
                    PRIMARY KEY (id)
                ) DEFAULT CHARACTER SET utf8mb4
            SQL);
        $this->addSql(<<<'SQL'
                CREATE TABLE team_list_team (
                    team_list_id INT NOT NULL,
                    team_id INT NOT NULL,
                    INDEX IDX_362B6711C2D767BC (team_list_id),
                    INDEX IDX_362B6711296CD8AE (team_id),
                    PRIMARY KEY (team_list_id, team_id)
                ) DEFAULT CHARACTER SET utf8mb4
            SQL);
        $this->addSql(<<<'SQL'
                CREATE TABLE tournament (
                    id INT AUTO_INCREMENT NOT NULL,
                    ident VARCHAR(255) NOT NULL,
                    level INT NOT NULL,
                    number_of_choices INT DEFAULT 0 NOT NULL,
                    state VARCHAR(255) DEFAULT 'open' NOT NULL,
                    is_two_leg TINYINT DEFAULT 0 NOT NULL,
                    type VARCHAR(255) DEFAULT 'classic' NOT NULL,
                    PRIMARY KEY (id)
                ) DEFAULT CHARACTER SET utf8mb4
            SQL);
        $this->addSql(<<<'SQL'
                CREATE TABLE tournament_participant (
                    tournament_id INT NOT NULL,
                    participant_id INT NOT NULL,
                    INDEX IDX_5C4BB35B33D1A3E7 (tournament_id),
                    INDEX IDX_5C4BB35B9D1C3019 (participant_id),
                    PRIMARY KEY (tournament_id, participant_id)
                ) DEFAULT CHARACTER SET utf8mb4
            SQL);
        $this->addSql(<<<'SQL'
                CREATE TABLE user (
                    id INT AUTO_INCREMENT NOT NULL,
                    email VARCHAR(180) NOT NULL,
                    roles JSON NOT NULL,
                    password VARCHAR(255) NOT NULL,
                    is_verified TINYINT NOT NULL,
                    UNIQUE INDEX UNIQ_IDENTIFIER_EMAIL (email),
                    PRIMARY KEY (id)
                ) DEFAULT CHARACTER SET utf8mb4
            SQL);
        $this->addSql(<<<'SQL'
                ALTER TABLE
                    battle_round
                ADD
                    CONSTRAINT FK_DCD5BB8633D1A3E7 FOREIGN KEY (tournament_id) REFERENCES tournament (id)
            SQL);
        $this->addSql(<<<'SQL'
                ALTER TABLE
                    battle_round_participant
                ADD
                    CONSTRAINT FK_31791C087271F3F6 FOREIGN KEY (battle_round_id) REFERENCES battle_round (id) ON DELETE CASCADE
            SQL);
        $this->addSql(<<<'SQL'
                ALTER TABLE
                    battle_round_participant
                ADD
                    CONSTRAINT FK_31791C089D1C3019 FOREIGN KEY (participant_id) REFERENCES participant (id) ON DELETE CASCADE
            SQL);
        $this->addSql(<<<'SQL'
                ALTER TABLE
                    battle_round_player
                ADD
                    CONSTRAINT FK_D77657907271F3F6 FOREIGN KEY (battle_round_id) REFERENCES battle_round (id) ON DELETE CASCADE
            SQL);
        $this->addSql(<<<'SQL'
                ALTER TABLE
                    battle_round_player
                ADD
                    CONSTRAINT FK_D776579099E6F5DF FOREIGN KEY (player_id) REFERENCES player (id) ON DELETE CASCADE
            SQL);
        $this->addSql(<<<'SQL'
                ALTER TABLE
                    file
                ADD
                    CONSTRAINT FK_8C9F361016678C77 FOREIGN KEY (uploader_id) REFERENCES user (id)
            SQL);
        $this->addSql(<<<'SQL'
                ALTER TABLE
                    fixture
                ADD
                    CONSTRAINT FK_5E540EE9C4C13F6 FOREIGN KEY (home_team_id) REFERENCES team (id)
            SQL);
        $this->addSql(<<<'SQL'
                ALTER TABLE
                    fixture
                ADD
                    CONSTRAINT FK_5E540EE45185D02 FOREIGN KEY (away_team_id) REFERENCES team (id)
            SQL);
        $this->addSql(<<<'SQL'
                ALTER TABLE
                    fixture
                ADD
                    CONSTRAINT FK_5E540EE1D64E812 FOREIGN KEY (home_participant_id) REFERENCES participant (id)
            SQL);
        $this->addSql(<<<'SQL'
                ALTER TABLE
                    fixture
                ADD
                    CONSTRAINT FK_5E540EE2EC802DC FOREIGN KEY (away_participant_id) REFERENCES participant (id)
            SQL);
        $this->addSql(<<<'SQL'
                ALTER TABLE
                    fixture
                ADD
                    CONSTRAINT FK_5E540EEA6005CA0 FOREIGN KEY (round_id) REFERENCES round (id)
            SQL);
        $this->addSql(<<<'SQL'
                ALTER TABLE
                    fixture
                ADD
                    CONSTRAINT FK_5E540EE4023EF3F FOREIGN KEY (first_leg_id) REFERENCES result (id)
            SQL);
        $this->addSql(<<<'SQL'
                ALTER TABLE
                    fixture
                ADD
                    CONSTRAINT FK_5E540EE55E96BB9 FOREIGN KEY (second_leg_id) REFERENCES result (id)
            SQL);
        $this->addSql(<<<'SQL'
                ALTER TABLE
                    fixture
                ADD
                    CONSTRAINT FK_5E540EED5001CEB FOREIGN KEY (third_leg_id) REFERENCES result (id)
            SQL);
        $this->addSql(<<<'SQL'
                ALTER TABLE
                    participant
                ADD
                    CONSTRAINT FK_D79F6B1193CB796C FOREIGN KEY (file_id) REFERENCES file (id)
            SQL);
        $this->addSql(<<<'SQL'
                ALTER TABLE
                    participant_player
                ADD
                    CONSTRAINT FK_2A65C4E49D1C3019 FOREIGN KEY (participant_id) REFERENCES participant (id) ON DELETE CASCADE
            SQL);
        $this->addSql(<<<'SQL'
                ALTER TABLE
                    participant_player
                ADD
                    CONSTRAINT FK_2A65C4E499E6F5DF FOREIGN KEY (player_id) REFERENCES player (id) ON DELETE CASCADE
            SQL);
        $this->addSql(<<<'SQL'
                ALTER TABLE
                    player
                ADD
                    CONSTRAINT FK_98197A6593CB796C FOREIGN KEY (file_id) REFERENCES file (id)
            SQL);
        $this->addSql(<<<'SQL'
                ALTER TABLE
                    round
                ADD
                    CONSTRAINT FK_C5EEEA3433D1A3E7 FOREIGN KEY (tournament_id) REFERENCES tournament (id)
            SQL);
        $this->addSql(<<<'SQL'
                ALTER TABLE
                    setting
                ADD
                    CONSTRAINT FK_9F74B898A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)
            SQL);
        $this->addSql(<<<'SQL'
                ALTER TABLE
                    spotify_access_token
                ADD
                    CONSTRAINT FK_32320EC3A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)
            SQL);
        $this->addSql('ALTER TABLE team ADD CONSTRAINT FK_C4E0A61F93CB796C FOREIGN KEY (file_id) REFERENCES file (id)');
        $this->addSql(<<<'SQL'
                ALTER TABLE
                    team_list
                ADD
                    CONSTRAINT FK_95290C6333D1A3E7 FOREIGN KEY (tournament_id) REFERENCES tournament (id)
            SQL);
        $this->addSql(<<<'SQL'
                ALTER TABLE
                    team_list
                ADD
                    CONSTRAINT FK_95290C639D1C3019 FOREIGN KEY (participant_id) REFERENCES participant (id)
            SQL);
        $this->addSql(<<<'SQL'
                ALTER TABLE
                    team_list_team
                ADD
                    CONSTRAINT FK_362B6711C2D767BC FOREIGN KEY (team_list_id) REFERENCES team_list (id) ON DELETE CASCADE
            SQL);
        $this->addSql(<<<'SQL'
                ALTER TABLE
                    team_list_team
                ADD
                    CONSTRAINT FK_362B6711296CD8AE FOREIGN KEY (team_id) REFERENCES team (id) ON DELETE CASCADE
            SQL);
        $this->addSql(<<<'SQL'
                ALTER TABLE
                    tournament_participant
                ADD
                    CONSTRAINT FK_5C4BB35B33D1A3E7 FOREIGN KEY (tournament_id) REFERENCES tournament (id) ON DELETE CASCADE
            SQL);
        $this->addSql(<<<'SQL'
                ALTER TABLE
                    tournament_participant
                ADD
                    CONSTRAINT FK_5C4BB35B9D1C3019 FOREIGN KEY (participant_id) REFERENCES participant (id) ON DELETE CASCADE
            SQL);
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE battle_round DROP FOREIGN KEY FK_DCD5BB8633D1A3E7');
        $this->addSql('ALTER TABLE battle_round_participant DROP FOREIGN KEY FK_31791C087271F3F6');
        $this->addSql('ALTER TABLE battle_round_participant DROP FOREIGN KEY FK_31791C089D1C3019');
        $this->addSql('ALTER TABLE battle_round_player DROP FOREIGN KEY FK_D77657907271F3F6');
        $this->addSql('ALTER TABLE battle_round_player DROP FOREIGN KEY FK_D776579099E6F5DF');
        $this->addSql('ALTER TABLE file DROP FOREIGN KEY FK_8C9F361016678C77');
        $this->addSql('ALTER TABLE fixture DROP FOREIGN KEY FK_5E540EE9C4C13F6');
        $this->addSql('ALTER TABLE fixture DROP FOREIGN KEY FK_5E540EE45185D02');
        $this->addSql('ALTER TABLE fixture DROP FOREIGN KEY FK_5E540EE1D64E812');
        $this->addSql('ALTER TABLE fixture DROP FOREIGN KEY FK_5E540EE2EC802DC');
        $this->addSql('ALTER TABLE fixture DROP FOREIGN KEY FK_5E540EEA6005CA0');
        $this->addSql('ALTER TABLE fixture DROP FOREIGN KEY FK_5E540EE4023EF3F');
        $this->addSql('ALTER TABLE fixture DROP FOREIGN KEY FK_5E540EE55E96BB9');
        $this->addSql('ALTER TABLE fixture DROP FOREIGN KEY FK_5E540EED5001CEB');
        $this->addSql('ALTER TABLE participant DROP FOREIGN KEY FK_D79F6B1193CB796C');
        $this->addSql('ALTER TABLE participant_player DROP FOREIGN KEY FK_2A65C4E49D1C3019');
        $this->addSql('ALTER TABLE participant_player DROP FOREIGN KEY FK_2A65C4E499E6F5DF');
        $this->addSql('ALTER TABLE player DROP FOREIGN KEY FK_98197A6593CB796C');
        $this->addSql('ALTER TABLE round DROP FOREIGN KEY FK_C5EEEA3433D1A3E7');
        $this->addSql('ALTER TABLE setting DROP FOREIGN KEY FK_9F74B898A76ED395');
        $this->addSql('ALTER TABLE spotify_access_token DROP FOREIGN KEY FK_32320EC3A76ED395');
        $this->addSql('ALTER TABLE team DROP FOREIGN KEY FK_C4E0A61F93CB796C');
        $this->addSql('ALTER TABLE team_list DROP FOREIGN KEY FK_95290C6333D1A3E7');
        $this->addSql('ALTER TABLE team_list DROP FOREIGN KEY FK_95290C639D1C3019');
        $this->addSql('ALTER TABLE team_list_team DROP FOREIGN KEY FK_362B6711C2D767BC');
        $this->addSql('ALTER TABLE team_list_team DROP FOREIGN KEY FK_362B6711296CD8AE');
        $this->addSql('ALTER TABLE tournament_participant DROP FOREIGN KEY FK_5C4BB35B33D1A3E7');
        $this->addSql('ALTER TABLE tournament_participant DROP FOREIGN KEY FK_5C4BB35B9D1C3019');
        $this->addSql('DROP TABLE battle_round');
        $this->addSql('DROP TABLE battle_round_participant');
        $this->addSql('DROP TABLE battle_round_player');
        $this->addSql('DROP TABLE file');
        $this->addSql('DROP TABLE fixture');
        $this->addSql('DROP TABLE participant');
        $this->addSql('DROP TABLE participant_player');
        $this->addSql('DROP TABLE player');
        $this->addSql('DROP TABLE result');
        $this->addSql('DROP TABLE round');
        $this->addSql('DROP TABLE setting');
        $this->addSql('DROP TABLE spotify_access_token');
        $this->addSql('DROP TABLE team');
        $this->addSql('DROP TABLE team_list');
        $this->addSql('DROP TABLE team_list_team');
        $this->addSql('DROP TABLE tournament');
        $this->addSql('DROP TABLE tournament_participant');
        $this->addSql('DROP TABLE user');
    }

    public function isTransactional(): bool
    {
        // MySQL kann DDL nicht in Transaktionen ausführen.
        return false;
    }
}
