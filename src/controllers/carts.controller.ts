import { Cart } from "../entities/cart.entity";
import { CartsService } from "../services/carts.service";
import { RequestInterface } from "../infterfaces/request.interface";

export class CartsController {
   private readonly cartsService: CartsService;

   constructor(cartsService: CartsService) {
      this.cartsService = cartsService;
   }

   async getAllCarts(): Promise<Cart[]> {
      return this.cartsService.findAll();
   }

   async getCartById(request: RequestInterface): Promise<Cart> {
      if (!request.body || !request.params.id || !Number(request.params.id)) {
         throw new Error("Bad request");
      }
      return this.cartsService.findOne(Number(request.params.id));
   }
}
