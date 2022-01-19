import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("currencies")
export class Currency extends BaseEntity {
   @PrimaryGeneratedColumn()
   id: number;

   @Column({
      length: 3,
   })
   symbol!: string;

   @Column({
      length: 56,
   })
   caption!: string;
}
