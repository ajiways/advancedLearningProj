import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstMigration1642556141176 implements MigrationInterface {
   name = "FirstMigration1642556141176";

   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
            CREATE TYPE "public"."attachments_type_enum" AS ENUM('SMALL', 'ORIGINAL')
        `);
      await queryRunner.query(`
            CREATE TABLE "attachments" (
                "id" SERIAL NOT NULL,
                "type" "public"."attachments_type_enum" NOT NULL,
                "name" character varying(56) NOT NULL,
                "file_path" character varying(256) NOT NULL,
                CONSTRAINT "PK_5e1f050bcff31e3084a1d662412" PRIMARY KEY ("id")
            )
        `);
      await queryRunner.query(`
            CREATE TABLE "product_images" (
                "id" SERIAL NOT NULL,
                "range" integer NOT NULL,
                "original_attachment_id" integer NOT NULL,
                "small_attachment_id" integer NOT NULL,
                CONSTRAINT "PK_1974264ea7265989af8392f63a1" PRIMARY KEY ("id")
            )
        `);
      await queryRunner.query(`
            CREATE TABLE "brands" (
                "id" SERIAL NOT NULL,
                "caption" character varying(56) NOT NULL,
                "logo_attachment_id" integer,
                CONSTRAINT "REL_1d6279240938040736d8306435" UNIQUE ("logo_attachment_id"),
                CONSTRAINT "PK_b0c437120b624da1034a81fc561" PRIMARY KEY ("id")
            )
        `);
      await queryRunner.query(`
            CREATE TABLE "customers" (
                "id" SERIAL NOT NULL,
                "email" character varying(56) NOT NULL,
                "phone" numeric NOT NULL,
                "first_name" character varying(56) NOT NULL,
                "last_name" character varying(56) NOT NULL,
                CONSTRAINT "PK_133ec679a801fab5e070f73d3ea" PRIMARY KEY ("id")
            )
        `);
      await queryRunner.query(`
            CREATE TYPE "public"."orders_status_enum" AS ENUM('PREPARING', 'REGISTRATION', 'PAYING')
        `);
      await queryRunner.query(`
            CREATE TABLE "orders" (
                "id" SERIAL NOT NULL,
                "status" "public"."orders_status_enum" NOT NULL DEFAULT 'REGISTRATION',
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "customer_id" integer,
                CONSTRAINT "REL_772d0ce0473ac2ccfa26060dbe" UNIQUE ("customer_id"),
                CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id")
            )
        `);
      await queryRunner.query(`
            CREATE TABLE "categories" (
                "id" SERIAL NOT NULL,
                "caption" character varying(56) NOT NULL,
                "rank" integer NOT NULL,
                "parent_category_id" integer,
                CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id")
            )
        `);
      await queryRunner.query(`
            CREATE TABLE "currencies" (
                "id" SERIAL NOT NULL,
                "symbol" character varying(3) NOT NULL,
                "caption" character varying(56) NOT NULL,
                CONSTRAINT "PK_d528c54860c4182db13548e08c4" PRIMARY KEY ("id")
            )
        `);
      await queryRunner.query(`
            CREATE TYPE "public"."properties_type_enum" AS ENUM('TEXT', 'NUMBER', 'DATE', 'COLOR')
        `);
      await queryRunner.query(`
            CREATE TABLE "properties" (
                "id" SERIAL NOT NULL,
                "caption" character varying NOT NULL,
                "type" "public"."properties_type_enum" NOT NULL,
                CONSTRAINT "PK_2d83bfa0b9fcd45dee1785af44d" PRIMARY KEY ("id")
            )
        `);
      await queryRunner.query(`
            CREATE TABLE "products" (
                "id" SERIAL NOT NULL,
                "caption" character varying(56) NOT NULL,
                "description" character varying NOT NULL,
                "price" integer NOT NULL,
                "available_amount" integer,
                "category_id" integer,
                "currency_id" integer,
                "brand_id" integer,
                CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id")
            )
        `);
      await queryRunner.query(`
            CREATE TABLE "carts" (
                "id" SERIAL NOT NULL,
                "amount" integer NOT NULL,
                "order_id" integer,
                CONSTRAINT "REL_ace88a18b5f57ade458db9061d" UNIQUE ("order_id"),
                CONSTRAINT "PK_b5f695a59f5ebb50af3c8160816" PRIMARY KEY ("id")
            )
        `);
      await queryRunner.query(`
            CREATE TABLE "payments" (
                "id" SERIAL NOT NULL,
                "kind" character varying(56) NOT NULL,
                "order_id" integer,
                CONSTRAINT "REL_b2f7b823a21562eeca20e72b00" UNIQUE ("order_id"),
                CONSTRAINT "PK_197ab7af18c93fbb0c9b28b4a59" PRIMARY KEY ("id")
            )
        `);
      await queryRunner.query(`
            CREATE TABLE "product_properties" (
                "product_id" integer NOT NULL,
                "property_id" integer NOT NULL,
                CONSTRAINT "PK_138669e900adf3161b794736298" PRIMARY KEY ("product_id", "property_id")
            )
        `);
      await queryRunner.query(`
            CREATE INDEX "IDX_7fad253874cd58cb759099147a" ON "product_properties" ("product_id")
        `);
      await queryRunner.query(`
            CREATE INDEX "IDX_0f3885b4091f332d3476181e0c" ON "product_properties" ("property_id")
        `);
      await queryRunner.query(`
            CREATE TABLE "cart_products" (
                "cart_id" integer NOT NULL,
                "product_id" integer NOT NULL,
                CONSTRAINT "PK_bcd1ff5a1d4f6ef4e3a00af6886" PRIMARY KEY ("cart_id", "product_id")
            )
        `);
      await queryRunner.query(`
            CREATE INDEX "IDX_ebc4fe8eabf38786bb86cda0b9" ON "cart_products" ("cart_id")
        `);
      await queryRunner.query(`
            CREATE INDEX "IDX_bb7910594db3f08cadeb6f484c" ON "cart_products" ("product_id")
        `);
      await queryRunner.query(`
            ALTER TABLE "product_images"
            ADD CONSTRAINT "FK_5dcb680c005c847a5ac7fbc119b" FOREIGN KEY ("original_attachment_id") REFERENCES "attachments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
      await queryRunner.query(`
            ALTER TABLE "product_images"
            ADD CONSTRAINT "FK_81ab0379de4192c1311f032c39f" FOREIGN KEY ("small_attachment_id") REFERENCES "attachments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
      await queryRunner.query(`
            ALTER TABLE "brands"
            ADD CONSTRAINT "FK_1d6279240938040736d83064356" FOREIGN KEY ("logo_attachment_id") REFERENCES "attachments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
      await queryRunner.query(`
            ALTER TABLE "orders"
            ADD CONSTRAINT "FK_772d0ce0473ac2ccfa26060dbe9" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
      await queryRunner.query(`
            ALTER TABLE "categories"
            ADD CONSTRAINT "FK_de08738901be6b34d2824a1e243" FOREIGN KEY ("parent_category_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
      await queryRunner.query(`
            ALTER TABLE "products"
            ADD CONSTRAINT "FK_9a5f6868c96e0069e699f33e124" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
      await queryRunner.query(`
            ALTER TABLE "products"
            ADD CONSTRAINT "FK_ddec89ba43ccb7f143ddc18270f" FOREIGN KEY ("currency_id") REFERENCES "currencies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
      await queryRunner.query(`
            ALTER TABLE "products"
            ADD CONSTRAINT "FK_1530a6f15d3c79d1b70be98f2be" FOREIGN KEY ("brand_id") REFERENCES "brands"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
      await queryRunner.query(`
            ALTER TABLE "carts"
            ADD CONSTRAINT "FK_ace88a18b5f57ade458db9061d2" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
      await queryRunner.query(`
            ALTER TABLE "payments"
            ADD CONSTRAINT "FK_b2f7b823a21562eeca20e72b006" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
      await queryRunner.query(`
            ALTER TABLE "product_properties"
            ADD CONSTRAINT "FK_7fad253874cd58cb759099147a7" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
      await queryRunner.query(`
            ALTER TABLE "product_properties"
            ADD CONSTRAINT "FK_0f3885b4091f332d3476181e0c0" FOREIGN KEY ("property_id") REFERENCES "properties"("id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
      await queryRunner.query(`
            ALTER TABLE "cart_products"
            ADD CONSTRAINT "FK_ebc4fe8eabf38786bb86cda0b9f" FOREIGN KEY ("cart_id") REFERENCES "carts"("id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
      await queryRunner.query(`
            ALTER TABLE "cart_products"
            ADD CONSTRAINT "FK_bb7910594db3f08cadeb6f484c1" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
            ALTER TABLE "cart_products" DROP CONSTRAINT "FK_bb7910594db3f08cadeb6f484c1"
        `);
      await queryRunner.query(`
            ALTER TABLE "cart_products" DROP CONSTRAINT "FK_ebc4fe8eabf38786bb86cda0b9f"
        `);
      await queryRunner.query(`
            ALTER TABLE "product_properties" DROP CONSTRAINT "FK_0f3885b4091f332d3476181e0c0"
        `);
      await queryRunner.query(`
            ALTER TABLE "product_properties" DROP CONSTRAINT "FK_7fad253874cd58cb759099147a7"
        `);
      await queryRunner.query(`
            ALTER TABLE "payments" DROP CONSTRAINT "FK_b2f7b823a21562eeca20e72b006"
        `);
      await queryRunner.query(`
            ALTER TABLE "carts" DROP CONSTRAINT "FK_ace88a18b5f57ade458db9061d2"
        `);
      await queryRunner.query(`
            ALTER TABLE "products" DROP CONSTRAINT "FK_1530a6f15d3c79d1b70be98f2be"
        `);
      await queryRunner.query(`
            ALTER TABLE "products" DROP CONSTRAINT "FK_ddec89ba43ccb7f143ddc18270f"
        `);
      await queryRunner.query(`
            ALTER TABLE "products" DROP CONSTRAINT "FK_9a5f6868c96e0069e699f33e124"
        `);
      await queryRunner.query(`
            ALTER TABLE "categories" DROP CONSTRAINT "FK_de08738901be6b34d2824a1e243"
        `);
      await queryRunner.query(`
            ALTER TABLE "orders" DROP CONSTRAINT "FK_772d0ce0473ac2ccfa26060dbe9"
        `);
      await queryRunner.query(`
            ALTER TABLE "brands" DROP CONSTRAINT "FK_1d6279240938040736d83064356"
        `);
      await queryRunner.query(`
            ALTER TABLE "product_images" DROP CONSTRAINT "FK_81ab0379de4192c1311f032c39f"
        `);
      await queryRunner.query(`
            ALTER TABLE "product_images" DROP CONSTRAINT "FK_5dcb680c005c847a5ac7fbc119b"
        `);
      await queryRunner.query(`
            DROP INDEX "public"."IDX_bb7910594db3f08cadeb6f484c"
        `);
      await queryRunner.query(`
            DROP INDEX "public"."IDX_ebc4fe8eabf38786bb86cda0b9"
        `);
      await queryRunner.query(`
            DROP TABLE "cart_products"
        `);
      await queryRunner.query(`
            DROP INDEX "public"."IDX_0f3885b4091f332d3476181e0c"
        `);
      await queryRunner.query(`
            DROP INDEX "public"."IDX_7fad253874cd58cb759099147a"
        `);
      await queryRunner.query(`
            DROP TABLE "product_properties"
        `);
      await queryRunner.query(`
            DROP TABLE "payments"
        `);
      await queryRunner.query(`
            DROP TABLE "carts"
        `);
      await queryRunner.query(`
            DROP TABLE "products"
        `);
      await queryRunner.query(`
            DROP TABLE "properties"
        `);
      await queryRunner.query(`
            DROP TYPE "public"."properties_type_enum"
        `);
      await queryRunner.query(`
            DROP TABLE "currencies"
        `);
      await queryRunner.query(`
            DROP TABLE "categories"
        `);
      await queryRunner.query(`
            DROP TABLE "orders"
        `);
      await queryRunner.query(`
            DROP TYPE "public"."orders_status_enum"
        `);
      await queryRunner.query(`
            DROP TABLE "customers"
        `);
      await queryRunner.query(`
            DROP TABLE "brands"
        `);
      await queryRunner.query(`
            DROP TABLE "product_images"
        `);
      await queryRunner.query(`
            DROP TABLE "attachments"
        `);
      await queryRunner.query(`
            DROP TYPE "public"."attachments_type_enum"
        `);
   }
}
