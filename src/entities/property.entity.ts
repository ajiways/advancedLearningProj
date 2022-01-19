import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum propertiesEnum {
   TEXT = "TEXT",
   NUMBER = "NUMBER",
   DATE = "DATE",
   COLOR = "COLOR",
}

@Entity("properties")
export class Property extends BaseEntity {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   caption!: string;

   @Column({ type: "enum", enum: propertiesEnum })
   type!: propertiesEnum;
}
