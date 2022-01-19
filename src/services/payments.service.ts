import { Payment } from "../entities/payment.entity";
import { Connection, Repository } from "typeorm";

export class PaymentsService {
   private readonly paymentsRepository: Repository<Payment>;

   constructor(dataProvider: Connection) {
      this.paymentsRepository = dataProvider.getRepository(Payment);
   }

   async findAll(): Promise<Payment[]> {
      return this.paymentsRepository.find();
   }

   async findOne(id: number): Promise<Payment> {
      const result = await this.paymentsRepository.findOne(id);
      if (!result) {
         throw new Error("Empty querry result!");
      }
      return result;
   }
}
