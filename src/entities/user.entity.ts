import { IsEmail, IsPhoneNumber } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User extends BaseEntity {
   @PrimaryGeneratedColumn()
   id: number;

   @Column({
      unique: true,
   })
   @IsEmail({
      length: 56,
   })
   email: string;

   @Column({
      type: "numeric",
      unique: true,
   })
   @IsPhoneNumber()
   phone: string;

   @Column({
      length: 56,
   })
   firstName: string;

   @Column({
      length: 56,
   })
   lastName: string;

   @Column({
      length: 256,
   })
   password: string;
}
