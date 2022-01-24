import { Order } from "../entities/order.entity";
import { OrdersService } from "../services/orders.service";
import { RequestInterface } from "../infterfaces/request.interface";
import { CustomExcteption } from "../exceptions/custom.exception";

export class OrdersController {
   private readonly ordersService: OrdersService;

   constructor(ordersService: OrdersService) {
      this.ordersService = ordersService;
   }

   async getAllOrders(): Promise<Order[]> {
      return this.ordersService.findAll();
   }

   async getOrderById(request: RequestInterface): Promise<Order> {
      if (!request.body || !request.params.id || !Number(request.params.id)) {
         throw CustomExcteption.BadRequest("No params for this request was provided");
      }
      return this.ordersService.findOne(Number(request.params.id));
   }
}
