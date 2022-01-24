import { Cart } from "../entities/cart.entity";
import { Connection, Repository } from "typeorm";
import { CustomExcteption } from "../exceptions/custom.exception";
import { OrdersService } from "./orders.service";
import { ProductsService } from "./products.service";

export class CartsService {
   private readonly cartsRepository: Repository<Cart>;
   private readonly orderService: OrdersService;
   private readonly productsService: ProductsService;

   constructor(dataProvider: Connection, orderService: OrdersService, productsService: ProductsService) {
      this.cartsRepository = dataProvider.getRepository(Cart);
      this.orderService = orderService;
      this.productsService = productsService;
   }

   async createCart(customer_id: number, product_id: number, amount: number): Promise<boolean> {
      const order = await this.orderService.createOrder(customer_id);
      const product = await this.productsService.findOne(product_id);

      if (!order) {
         throw CustomExcteption.NotFound("Заказ не найден");
      } else if (!product) {
         throw CustomExcteption.NotFound("Товар не найден");
      }

      const cart = this.cartsRepository.create({
         order: order,
         product: product,
         amount: amount,
      });

      await cart.save();

      return true;
   }

   async findAll(): Promise<Cart[]> {
      const result = this.cartsRepository.find();
      if (!result) {
         throw CustomExcteption.NotFound("Empty query result!");
      }
      return result;
   }

   async findOne(id: number): Promise<Cart> {
      const result = await this.cartsRepository.findOne(id);
      if (!result) {
         throw CustomExcteption.NotFound("Empty query result!");
      }
      return result;
   }
}
