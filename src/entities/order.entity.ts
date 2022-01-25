import { Min } from "class-validator";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Customer } from "./customer.entity";

export enum orderStatus {
  PREPARING = "PREPARING",
  REGISTRATION = "REGISTRATION",
  PAYING = "PAYING",
}

@Entity("orders")
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Customer)
  @JoinColumn()
  @Min(1)
  customer!: Customer;

  @Column({
    type: "enum",
    enum: orderStatus,
    default: orderStatus.REGISTRATION,
  })
  status!: orderStatus;

  @CreateDateColumn()
  createdAt!: number;

  @UpdateDateColumn()
  updatedAt!: number;
}
