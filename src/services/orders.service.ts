import { Order } from "../entities/order.entity";
import { Connection, Repository } from "typeorm";

export class OrdersService {
   private readonly ordersRepository: Repository<Order>;

   constructor(dataProvider: Connection) {
      this.ordersRepository = dataProvider.getRepository(Order);
   }

   async findAll(): Promise<Order[]> {
      return this.ordersRepository.find();
   }

   async findOne(id: number): Promise<Order> {
      const result = await this.ordersRepository.findOne(id);
      if (!result) {
         throw new Error("Empty querry result!");
      }
      return result;
   }
}
