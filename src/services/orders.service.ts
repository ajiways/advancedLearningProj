import { Order, orderStatus } from "../entities/order.entity";
import { Connection, Repository } from "typeorm";
import { CustomException } from "../exceptions/custom.exception";
import { UsersService } from "./user.service";

export class OrdersService {
   private readonly ordersRepository: Repository<Order>;
   private readonly userService: UsersService;

   constructor(dataProvider: Connection, userService: UsersService) {
      this.ordersRepository = dataProvider.getRepository(Order);
      this.userService = userService;
   }

   async createOrder(customer_id: number): Promise<Order> {
      const customer = await this.userService.findOne(customer_id);

      const order = this.ordersRepository.create({
         customer: customer,
         status: orderStatus.REGISTRATION,
      });

      await order.save();
      return order;
   }

   async findAll(): Promise<Order[]> {
      return this.ordersRepository.find();
   }

   async findOne(id: number): Promise<Order> {
      const result = await this.ordersRepository.findOne(id);
      if (!result) {
         throw CustomException.NotFound("Empty query result!");
      }
      return result;
   }
}
