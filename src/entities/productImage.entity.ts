import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Attachment } from "./attachment.entity";

@Entity("product_images")
export class ProductImage extends BaseEntity {
   @PrimaryGeneratedColumn()
   id: number;

   @ManyToOne(() => Attachment, { nullable: false, eager: true })
   @JoinColumn()
   originalAttachment?: Attachment;

   @ManyToOne(() => Attachment, { nullable: false, eager: true })
   @JoinColumn()
   smallAttachment?: Attachment;

   @Column()
   range!: number;
}
