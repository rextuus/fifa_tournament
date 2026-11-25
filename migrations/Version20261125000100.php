<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Tabelle der Messenger-Warteschlange (Transport doctrine, auto_setup=0). Wird nur angelegt, wenn sie fehlt –
 * ein Dump von securitas kann sie schon enthalten.
 */
final class Version20261125000100 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Messenger-Warteschlange (messenger_messages)';
    }

    public function up(Schema $schema): void
    {
        // Nicht skipIf(): übersprungene Migrationen würden nicht als ausgeführt vermerkt und bei jedem Deploy erneut
        // angeboten. So steht sie nach dem Import in doctrine_migration_versions, ohne etwas zu ändern.
        if ($schema->hasTable('messenger_messages')) {
            $this->write('messenger_messages existiert bereits – nur als ausgeführt vermerkt.');

            return;
        }

        $this->addSql(<<<'SQL'
                CREATE TABLE messenger_messages (
                    id BIGINT AUTO_INCREMENT NOT NULL,
                    body LONGTEXT NOT NULL,
                    headers LONGTEXT NOT NULL,
                    queue_name VARCHAR(190) NOT NULL,
                    created_at DATETIME NOT NULL,
                    available_at DATETIME NOT NULL,
                    delivered_at DATETIME DEFAULT NULL,
                    INDEX IDX_75EA56E0FB7336F0E3BD61CE16BA31DBBF396750 (
                        queue_name, available_at, delivered_at,
                        id
                    ),
                    PRIMARY KEY (id)
                )
            SQL);
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP TABLE messenger_messages');
    }

    public function isTransactional(): bool
    {
        // MySQL kann DDL nicht in Transaktionen ausführen.
        return false;
    }
}
