import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("customers")
export class Customer extends BaseEntity {
   @PrimaryGeneratedColumn()
   id: number;

   @Column({
      length: 56,
   })
   email!: string;

   @Column({
      type: "numeric",
   })
   phone!: number;

   @Column({
      length: 56,
   })
   first_name!: string;

   @Column({
      length: 56,
   })
   last_name!: string;
}
