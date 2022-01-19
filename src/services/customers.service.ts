import { Customer } from "../entities/customer.entity";
import { Connection, Repository } from "typeorm";

export class CustomersService {
   private readonly custometsRepository: Repository<Customer>;

   constructor(dataProvider: Connection) {
      this.custometsRepository = dataProvider.getRepository(Customer);
   }

   async findAll(): Promise<Customer[]> {
      return this.custometsRepository.find();
   }

   async findOne(id: number): Promise<Customer> {
      const result = await this.custometsRepository.findOne(id);
      if (!result) {
         throw new Error("Empty querry result!");
      }
      return result;
   }
}
