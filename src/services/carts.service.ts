import { Cart } from "../entities/cart.entity";
import { Connection, Repository } from "typeorm";

export class CartsService {
   private readonly cartsRepository: Repository<Cart>;

   constructor(dataProvider: Connection) {
      this.cartsRepository = dataProvider.getRepository(Cart);
   }

   async findAll(): Promise<Cart[]> {
      return this.cartsRepository.find();
   }

   async findOne(id: number): Promise<Cart> {
      const result = await this.cartsRepository.findOne(id);
      if (!result) {
         throw new Error("Empty querry result!");
      }
      return result;
   }
}
