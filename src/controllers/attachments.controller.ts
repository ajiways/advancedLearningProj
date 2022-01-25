import { Attachment } from "../entities/attachment.entity";
import { CustomException } from "../exceptions/custom.exception";
import { RequestInterface } from "../infterfaces/request.interface";
import { AttachmentsService } from "../services/attachments.service";
import { isCorrectNumber } from "../guards/isSorrectNumber.guard";

export class AttachmentsController {
  private readonly attachmentsService: AttachmentsService;

  constructor(attachmentsService: AttachmentsService) {
    this.attachmentsService = attachmentsService;
  }

  async getAllAttachments(): Promise<Attachment[]> {
    return this.attachmentsService.findAll();
  }

  async getAttachmentById(request: RequestInterface): Promise<Attachment> {
    if (!isCorrectNumber(request.params.id)) {
      throw CustomException.BadRequest(
        "No params for this request was provided"
      );
    }
    return this.attachmentsService.findOne(request.params.id);
  }
}
