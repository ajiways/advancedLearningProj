import { Min } from "class-validator";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("categories")
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 56,
  })
  caption!: string;

  @ManyToOne(() => Category, { nullable: true })
  @Min(1)
  parentCategory!: Category;

  @Column()
  @Min(1)
  rank!: number;
}
