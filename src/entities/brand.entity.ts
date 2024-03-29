import { Min } from "class-validator";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Attachment } from "./attachment.entity";

@Entity("brands")
export class Brand extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 56,
  })
  caption!: string;

  @OneToOne(() => Attachment)
  @JoinColumn()
  @Min(1)
  logoAttachment: Attachment;
}
