import { Product } from "../entities/product.entity";
import { Connection, Repository } from "typeorm";
import { CustomExcteption } from "../exceptions/custom.exception";

export class ProductsService {
   private readonly productsRepository: Repository<Product>;

   constructor(dataProvider: Connection) {
      this.productsRepository = dataProvider.getRepository(Product);
   }

   async findAll(): Promise<Product[]> {
      const result = this.productsRepository.find();
      if (!result) {
         throw CustomExcteption.NotFound("Empty query result!");
      }
      return result;
   }

   async findOne(id: number): Promise<Product> {
      const result = await this.productsRepository.findOne(id);
      if (!result) {
         throw CustomExcteption.NotFound("Empty query result!");
      }
      return result;
   }
}
