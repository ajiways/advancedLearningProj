import { Payment } from "../entities/payment.entity";
import { CustomExcteption } from "../exceptions/custom.exception";
import { RequestInterface } from "../infterfaces/request.interface";
import { PaymentsService } from "../services/payments.service";

export class PaymentsController {
   private readonly paymentsService: PaymentsService;

   constructor(paymentsService: PaymentsService) {
      this.paymentsService = paymentsService;
   }

   async getAllPayments(): Promise<Payment[]> {
      return this.paymentsService.findAll();
   }

   async getPaymentById(request: RequestInterface): Promise<Payment> {
      if (!request.body || !request.params.id || !Number(request.params.id)) {
         throw CustomExcteption.BadRequest("No params for this request was provided");
      }
      return this.paymentsService.findOne(Number(request.params.id));
   }
}
