import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProducts1622077180343 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "description",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "price",
            type: "numeric",
            isNullable: true,
          },
          {
            name: "promotional_price",
            type: "numeric",
            isNullable: true,
          },
          {
            name: "status_flag",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "category",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "image_url",
            type: "varchar",
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products')
  }

}
