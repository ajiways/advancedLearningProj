import { Order } from "../entities/order.entity";
import { OrdersService } from "../services/orders.service";
import { RequestInterface } from "../infterfaces/request.interface";
import { isCorrectNumber } from "../guards/isCorrectNumber.guard";

export class OrdersController {
  private readonly ordersService: OrdersService;

  constructor(ordersService: OrdersService) {
    this.ordersService = ordersService;
  }

  async getAllOrders(): Promise<Order[]> {
    return this.ordersService.findAll();
  }

  async getOrderById(request: RequestInterface): Promise<Order> {
    if (!isCorrectNumber(request.params.id)) {
      throw new Error("Bad request");
    }
    return this.ordersService.findOne(request.params.id);
  }
}
