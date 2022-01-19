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
   category!: Category;

   @Column()
   description!: string;

   @Column()
   price!: number;

   @ManyToOne(() => Currency, { eager: true })
   @JoinColumn()
   currency!: Currency;

   @ManyToOne(() => Brand, { eager: true })
   @JoinColumn()
   brand!: Brand;

   @Column({ nullable: true })
   availableAmount!: number;

   @ManyToMany(() => Property, { eager: true })
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
   property: Property;
}
