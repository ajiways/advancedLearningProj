import { Currency } from "../entities/currency.entity";
import { Connection, Repository } from "typeorm";

export class CurrenciesService {
   private readonly currenciesRepository: Repository<Currency>;

   constructor(dataProvider: Connection) {
      this.currenciesRepository = dataProvider.getRepository(Currency);
   }

   async findAll(): Promise<Currency[]> {
      return this.currenciesRepository.find();
   }

   async findOne(id: number): Promise<Currency> {
      const result = await this.currenciesRepository.findOne(id);
      if (!result) {
         throw new Error("Empty querry result!");
      }
      return result;
   }
}
