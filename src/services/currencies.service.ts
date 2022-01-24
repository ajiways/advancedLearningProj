import { Currency } from "../entities/currency.entity";
import { Connection, Repository } from "typeorm";
import { CustomException } from "../exceptions/custom.exception";

export class CurrenciesService {
   private readonly currenciesRepository: Repository<Currency>;

   constructor(dataProvider: Connection) {
      this.currenciesRepository = dataProvider.getRepository(Currency);
   }

   async findAll(): Promise<Currency[]> {
      const result = this.currenciesRepository.find();
      if (!result) {
         throw CustomException.NotFound("Empty query result!");
      }
      return result;
   }

   async findOne(id: number): Promise<Currency> {
      const result = await this.currenciesRepository.findOne(id);
      if (!result) {
         throw CustomException.NotFound("Empty query result!");
      }
      return result;
   }
}
