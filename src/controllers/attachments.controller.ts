import { Attachment } from "../entities/attachment.entity";
import { CustomExcteption } from "../exceptions/custom.exception";
import { RequestInterface } from "../infterfaces/request.interface";
import { AttachmentsService } from "../services/attachments.service";

export class AttachmentsController {
   private readonly attachmentsService: AttachmentsService;

   constructor(attachmentsService: AttachmentsService) {
      this.attachmentsService = attachmentsService;
   }

   async getAllAttachments(): Promise<Attachment[]> {
      return this.attachmentsService.findAll();
   }

   async getAttachmentById(request: RequestInterface): Promise<Attachment> {
      if (!request.body || !request.params.id || !Number(request.params.id)) {
         throw CustomExcteption.BadRequest("No params for this request was provided");
      }
      return this.attachmentsService.findOne(Number(request.params.id));
   }
}
