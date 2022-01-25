import { IsEmail, IsPhoneNumber } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("customers")
export class Customer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 56,
  })
  @IsEmail()
  email!: string;

  @Column({
    type: "numeric",
  })
  @IsPhoneNumber()
  phone!: number;

  @Column({
    length: 56,
  })
  firstName!: string;

  @Column({
    length: 56,
  })
  lastName!: string;
}
