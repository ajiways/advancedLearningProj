import { Product } from "../entities/product.entity";
import { Connection, Repository } from "typeorm";

export class ProductsService {
   private readonly productsRepository: Repository<Product>;

   constructor(dataProvider: Connection) {
      this.productsRepository = dataProvider.getRepository(Product);
   }

   async findAll(): Promise<Product[]> {
      return this.productsRepository.find();
   }

   async findOne(id: number): Promise<Product> {
      const result = await this.productsRepository.findOne(id);
      if (!result) {
         throw new Error("Empty querry result!");
      }
      return result;
   }
}
