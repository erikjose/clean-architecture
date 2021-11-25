import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class User1637381804714 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
        name: 'users',
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'email',
            type: 'varchar'
          },
          {
            name: 'initials',
            type: 'varchar'
          },
          {
            name: 'profileId',
            type: 'int'
          }
        ]
      })
    )

    await queryRunner.createForeignKey('users', new TableForeignKey({
      columnNames: ['profileId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'profiles',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users')
  }
}
