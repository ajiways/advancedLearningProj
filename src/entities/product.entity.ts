import { Min } from "class-validator";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Brand } from "./brand.entity";
import { Category } from "./category.entity";
import { Currency } from "./currency.entity";
import { Property } from "./property.entity";

@Entity("products")
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 56,
  })
  caption!: string;

  @ManyToOne(() => Category)
  @JoinTable()
  @Min(1)
  category!: Category;

  @Column()
  description!: string;

  @Column()
  @Min(1)
  price!: number;

  @ManyToOne(() => Currency)
  @JoinColumn()
  @Min(1)
  currency!: Currency;

  @ManyToOne(() => Brand)
  @JoinColumn()
  @Min(1)
  brand!: Brand;

  @Column({ nullable: true })
  availableAmount!: number;

  @ManyToMany(() => Property)
  @JoinTable({
    name: "product_properties",
    joinColumn: {
      name: "product_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "property_id",
      referencedColumnName: "id",
    },
  })
  @Min(1)
  property: Property;
}
