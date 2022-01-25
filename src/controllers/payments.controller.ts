import { Payment } from "../entities/payment.entity";
import { RequestInterface } from "../infterfaces/request.interface";
import { PaymentsService } from "../services/payments.service";
import { isCorrectNumber } from "../guards/isCorrectNumber.guard";

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
      throw new Error("Bad request");
    }
    return this.paymentsService.findOne(request.params.id);
  }
}
