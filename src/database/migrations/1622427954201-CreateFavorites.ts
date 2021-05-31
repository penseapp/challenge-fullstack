import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateFavorites1622427954201 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "favorites",
              columns: [
                {
                  name: "id",
                  type: "uuid",
                  isPrimary: true,
                },
                {
                  name: "user_id",
                  type: "varchar",
                },
                {
                  name: "product_id",
                  type: "varchar",
                },
                {
                  name: "created_at",
                  type: "timestamp",
                  default: "now()"
                },
                {
                  name: "updated_at",
                  type: "timestamp",
                  default: "now()"
                },
              ],
              foreignKeys: [
                {
                  name: "FKUser",
                  referencedTableName: "users",
                  referencedColumnNames: ["id"],
                  columnNames: ["user_id"],
                  onDelete: "SET NULL",
                  onUpdate: "SET NULL",
                },
                {
                  name: "FKProduct",
                  referencedTableName: "products",
                  referencedColumnNames: ["id"],
                  columnNames: ["product_id"],
                  onDelete: "SET NULL",
                  onUpdate: "SET NULL",
                },
              ]
            })
          )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("favorites")
    }

}
