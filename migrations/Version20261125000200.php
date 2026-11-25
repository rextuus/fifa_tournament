<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * messenger_messages aus dem securitas-Dump (Format Symfony 6.4: drei Einzelindizes, DC2Type-Kommentare) auf das
 * Format von Symfony 8 bringen (ein kombinierter Index). Der Import ersetzt die Tabelle, die Version20261125000100
 * beim ersten Deploy angelegt hat – deshalb diese eigene Migration. Auf einer frischen Datenbank ändert sie nichts.
 */
final class Version20261125000200 extends AbstractMigration
{
    private const array OLD_INDEXES = ['IDX_75EA56E0FB7336F0', 'IDX_75EA56E0E3BD61CE', 'IDX_75EA56E016BA31DB'];
    private const string NEW_INDEX = 'IDX_75EA56E0FB7336F0E3BD61CE16BA31DBBF396750';

    public function getDescription(): string
    {
        return 'messenger_messages: Indizes und Spalten auf das Format von Symfony 8 (nach Import von securitas)';
    }

    public function up(Schema $schema): void
    {
        $table = $schema->getTable('messenger_messages');

        // Nicht skipIf(): sonst würde die Migration nicht als ausgeführt vermerkt (siehe Version20261125000100).
        $old = array_values(array_filter(self::OLD_INDEXES, $table->hasIndex(...)));
        if ([] === $old && $table->hasIndex(self::NEW_INDEX)) {
            $this->write('messenger_messages hat schon das neue Format – nur als ausgeführt vermerkt.');

            return;
        }

        foreach ($old as $index) {
            $this->addSql(sprintf('DROP INDEX %s ON messenger_messages', $index));
        }
        $this->addSql(<<<'SQL'
                ALTER TABLE messenger_messages
                    CHANGE created_at created_at DATETIME NOT NULL,
                    CHANGE available_at available_at DATETIME NOT NULL,
                    CHANGE delivered_at delivered_at DATETIME DEFAULT NULL
            SQL);
        if (!$table->hasIndex(self::NEW_INDEX)) {
            $this->addSql(sprintf(
                'CREATE INDEX %s ON messenger_messages (queue_name, available_at, delivered_at, id)',
                self::NEW_INDEX,
            ));
        }
    }

    public function down(Schema $schema): void
    {
        // Zurück zum alten Format ist nicht sinnvoll: Symfony 8 erwartet den kombinierten Index.
        $this->throwIrreversibleMigrationException('messenger_messages bleibt im Format von Symfony 8.');
    }

    public function isTransactional(): bool
    {
        // MySQL kann DDL nicht in Transaktionen ausführen.
        return false;
    }
}
