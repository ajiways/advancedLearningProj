import { Attachment } from "../entities/attachment.entity";
import { Connection, Repository } from "typeorm";
import { CustomException } from "../exceptions/custom.exception";

export class AttachmentsService {
   private readonly attachmentsRepository: Repository<Attachment>;

   constructor(dataProvider: Connection) {
      this.attachmentsRepository = dataProvider.getRepository(Attachment);
   }

   async findAll(): Promise<Attachment[]> {
      const result = this.attachmentsRepository.find();
      if (!result) {
         throw CustomException.NotFound("Empty query result!");
      }
      return result;
   }

   async findOne(id: number): Promise<Attachment> {
      const result = await this.attachmentsRepository.findOne(id);
      if (!result) {
         throw CustomException.NotFound("Empty query result!");
      }
      return result;
   }
}
