import { Min } from "class-validator";
import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order.entity";

@Entity("payments")
export class Payment extends BaseEntity {
   @PrimaryGeneratedColumn()
   id: number;

   @OneToOne(() => Order, { eager: true })
   @JoinColumn()
   @Min(1)
   order!: number;

   @Column({
      length: 56,
   })
   kind!: string;
}
