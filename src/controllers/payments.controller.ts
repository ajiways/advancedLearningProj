import { Payment } from "../entities/payment.entity";
import { CustomException } from "../exceptions/custom.exception";
import { RequestInterface } from "../infterfaces/request.interface";
import { PaymentsService } from "../services/payments.service";
import { isCorrectNumber } from "../guards/isSorrectNumber.guard";

export class PaymentsController {
  private readonly paymentsService: PaymentsService;

  constructor(paymentsService: PaymentsService) {
    this.paymentsService = paymentsService;
  }

  async getAllPayments(): Promise<Payment[]> {
    return this.paymentsService.findAll();
  }

  async getPaymentById(request: RequestInterface): Promise<Payment> {
    if (!isCorrectNumber(request.params.id)) {
      throw CustomException.BadRequest(
        "No params for this request was provided"
      );
    }
    return this.paymentsService.findOne(request.params.id);
  }
}
