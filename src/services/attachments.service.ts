import { Attachment } from "../entities/attachment.entity";
import { Connection, Repository } from "typeorm";

export class AttachmentsService {
   private readonly attachmentsRepository: Repository<Attachment>;

   constructor(dataProvider: Connection) {
      this.attachmentsRepository = dataProvider.getRepository(Attachment);
   }

   async findAll(): Promise<Attachment[]> {
      return this.attachmentsRepository.find();
   }

   async findOne(id: number): Promise<Attachment> {
      const result = await this.attachmentsRepository.findOne(id);
      if (!result) {
         throw new Error("Empty querry result!");
      }
      return result;
   }
}
