import { MigrationInterface, QueryRunner } from "typeorm";

export class oneUserSeed1643006090428 implements MigrationInterface {
   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
         `INSERT INTO USERS (email, phone, first_name, last_name, password) VALUES ('some@mail.com', '79000000000', 'Name', 'LastName', '$2a$12$D6wNxZKZQQeefAfhaIN9J.Vuw015Teb2T/2k0BEltyvos/NSaDAgi');`
      ); // hash - "password"
   }

   public async down(queryRunner: QueryRunner): Promise<void> {}
}
