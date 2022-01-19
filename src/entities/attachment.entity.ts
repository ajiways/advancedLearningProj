import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum attachmentType {
   SMALL = "SMALL",
   ORIGINAL = "ORIGINAL",
}

@Entity("attachments")
export class Attachment extends BaseEntity {
   @PrimaryGeneratedColumn()
   id: number;

   @Column({
      type: "enum",
      enum: attachmentType,
   })
   type!: attachmentType;

   @Column({
      length: 56,
   })
   name!: string;

   @Column({
      length: 256,
   })
   filePath!: string;
}
