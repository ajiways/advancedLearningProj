import { MigrationInterface, QueryRunner } from "typeorm";

export class oneUserSeed1643006090428 implements MigrationInterface {
   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
         `INSERT INTO USERS (email, phone, first_name, last_name, password) VALUES ('some@mail.com', '79000000000', 'Name', 'LastName', '$2b$07$2ZNd7n90N4.yqmKcQKPbV.Ih8X7vEJbXRrIr/5IIPM5JuUBsI2jrm');`
      ); // hash - "password"
   }

   public async down(queryRunner: QueryRunner): Promise<void> {}
}
