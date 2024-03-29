import { Order } from "../entities/order.entity";
import { OrdersService } from "../services/orders.service";
import { RequestInterface } from "../infterfaces/request.interface";
import { CustomException } from "../exceptions/custom.exception";
import { isCorrectNumber } from "../guards/isSorrectNumber.guard";

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
      throw CustomException.BadRequest(
        "No params for this request was provided"
      );
    }
    return this.ordersService.findOne(request.params.id);
  }
}
