import { Payment } from "../entities/payment.entity";
import { Connection, Repository } from "typeorm";
import { CustomException } from "../exceptions/custom.exception";

export class PaymentsService {
   private readonly paymentsRepository: Repository<Payment>;

   constructor(dataProvider: Connection) {
      this.paymentsRepository = dataProvider.getRepository(Payment);
   }

   async findAll(): Promise<Payment[]> {
      const result = this.paymentsRepository.find();
      if (!result) {
         throw CustomException.NotFound("Empty query result!");
      }
      return result;
   }

   async findOne(id: number): Promise<Payment> {
      const result = await this.paymentsRepository.findOne(id);
      if (!result) {
         throw CustomException.NotFound("Empty query result!");
      }
      return result;
   }
}
