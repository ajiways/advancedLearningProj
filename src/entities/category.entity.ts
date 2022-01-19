import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("categories")
export class Category extends BaseEntity {
   @PrimaryGeneratedColumn()
   id: number;

   @Column({
      length: 56,
   })
   caption!: string;

   @ManyToOne(() => Category, { nullable: true }) // Если дать eager: true, будет maximum call stack size exceeded
   parent_category!: Category;
   // @TreeParent()
   // parent_category!: Category;
   // Я не понимаю как выстроить такие отношения.
   // @TreeChildren()
   // category!: Category;

   @Column()
   rank!: number;
}
