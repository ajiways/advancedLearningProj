import { min, Min } from "class-validator";
import {
   BaseEntity,
   Column,
   Entity,
   JoinColumn,
   JoinTable,
   ManyToMany,
   OneToOne,
   PrimaryGeneratedColumn,
} from "typeorm";
import { Order } from "./order.entity";
import { Product } from "./product.entity";

@Entity("carts")
export class Cart extends BaseEntity {
   @PrimaryGeneratedColumn()
   id: number;

   @OneToOne(() => Order, { eager: true })
   @JoinColumn()
   order!: Order;

   @ManyToMany(() => Product, { eager: true })
   @JoinTable({
      name: "cart_products",
      joinColumn: {
         name: "cart_id",
         referencedColumnName: "id",
      },
      inverseJoinColumn: {
         name: "product_id",
         referencedColumnName: "id",
      },
   })
   @Min(1)
   product!: Product;

   @Column()
   @Min(1)
   amount!: number;
}
