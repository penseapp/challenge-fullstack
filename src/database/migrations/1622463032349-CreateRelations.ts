import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateRelations1622463032349 implements MigrationInterface {
    name = 'CreateRelations1622463032349'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_favorites" ("id" varchar PRIMARY KEY NOT NULL, "user_id" varchar NOT NULL, "product_id" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`INSERT INTO "temporary_favorites"("id", "user_id", "product_id", "created_at", "updated_at") SELECT "id", "user_id", "product_id", "created_at", "updated_at" FROM "favorites"`);
        await queryRunner.query(`DROP TABLE "favorites"`);
        await queryRunner.query(`ALTER TABLE "temporary_favorites" RENAME TO "favorites"`);
        await queryRunner.query(`CREATE TABLE "temporary_favorites" ("id" varchar PRIMARY KEY NOT NULL, "user_id" varchar NOT NULL, "product_id" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "userId" varchar, "productId" varchar)`);
        await queryRunner.query(`INSERT INTO "temporary_favorites"("id", "user_id", "product_id", "created_at", "updated_at") SELECT "id", "user_id", "product_id", "created_at", "updated_at" FROM "favorites"`);
        await queryRunner.query(`DROP TABLE "favorites"`);
        await queryRunner.query(`ALTER TABLE "temporary_favorites" RENAME TO "favorites"`);
        await queryRunner.query(`CREATE TABLE "temporary_favorites" ("id" varchar PRIMARY KEY NOT NULL, "user_id" varchar NOT NULL, "product_id" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "userId" varchar, "productId" varchar, CONSTRAINT "FK_e747534006c6e3c2f09939da60f" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_0c7bba48aac77ad13092685ba5b" FOREIGN KEY ("productId") REFERENCES "products" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_favorites"("id", "user_id", "product_id", "created_at", "updated_at", "userId", "productId") SELECT "id", "user_id", "product_id", "created_at", "updated_at", "userId", "productId" FROM "favorites"`);
        await queryRunner.query(`DROP TABLE "favorites"`);
        await queryRunner.query(`ALTER TABLE "temporary_favorites" RENAME TO "favorites"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "favorites" RENAME TO "temporary_favorites"`);
        await queryRunner.query(`CREATE TABLE "favorites" ("id" varchar PRIMARY KEY NOT NULL, "user_id" varchar NOT NULL, "product_id" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "userId" varchar, "productId" varchar)`);
        await queryRunner.query(`INSERT INTO "favorites"("id", "user_id", "product_id", "created_at", "updated_at", "userId", "productId") SELECT "id", "user_id", "product_id", "created_at", "updated_at", "userId", "productId" FROM "temporary_favorites"`);
        await queryRunner.query(`DROP TABLE "temporary_favorites"`);
        await queryRunner.query(`ALTER TABLE "favorites" RENAME TO "temporary_favorites"`);
        await queryRunner.query(`CREATE TABLE "favorites" ("id" varchar PRIMARY KEY NOT NULL, "user_id" varchar NOT NULL, "product_id" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`INSERT INTO "favorites"("id", "user_id", "product_id", "created_at", "updated_at") SELECT "id", "user_id", "product_id", "created_at", "updated_at" FROM "temporary_favorites"`);
        await queryRunner.query(`DROP TABLE "temporary_favorites"`);
        await queryRunner.query(`ALTER TABLE "favorites" RENAME TO "temporary_favorites"`);
        await queryRunner.query(`CREATE TABLE "favorites" ("id" varchar PRIMARY KEY NOT NULL, "user_id" varchar NOT NULL, "product_id" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), CONSTRAINT "FK_35a6b05ee3b624d0de01ee50593" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_003e599a9fc0e8f154b6313639f" FOREIGN KEY ("product_id") REFERENCES "products" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "favorites"("id", "user_id", "product_id", "created_at", "updated_at") SELECT "id", "user_id", "product_id", "created_at", "updated_at" FROM "temporary_favorites"`);
        await queryRunner.query(`DROP TABLE "temporary_favorites"`);
    }

}
