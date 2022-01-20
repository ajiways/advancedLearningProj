import { Min } from "class-validator";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Attachment } from "./attachment.entity";

@Entity("product_images")
export class ProductImage extends BaseEntity {
   @PrimaryGeneratedColumn()
   id: number;

   @ManyToOne(() => Attachment, { nullable: false, eager: true })
   @JoinColumn()
   @Min(1)
   originalAttachment?: Attachment;

   @ManyToOne(() => Attachment, { nullable: false, eager: true })
   @JoinColumn()
   @Min(1)
   smallAttachment?: Attachment;

   @Column()
   @Min(1)
   range!: number;
}
