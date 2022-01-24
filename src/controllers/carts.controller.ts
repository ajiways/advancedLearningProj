import { Cart } from "../entities/cart.entity";
import { CartsService } from "../services/carts.service";
import { RequestInterface } from "../infterfaces/request.interface";
import { CustomException } from "../exceptions/custom.exception";
import express from "express";

export class CartsController {
   private readonly cartsService: CartsService;

   constructor(cartsService: CartsService) {
      this.cartsService = cartsService;
   }

   async createCart(request: RequestInterface, response: express.Response): Promise<string> {
      if (!request.body.product_id || !request.body.amount || !request.body.customer_id) {
         throw CustomException.BadRequest("Неправильно заполнены поля в форме");
      } else if (
         Number(request.body.customer_id) <= 0 ||
         Number(request.body.product_id) <= 0 ||
         Number(request.body.amount) <= 0
      ) {
         throw CustomException.BadRequest("Неправильно заполнены поля в форме");
      }

      const created = await this.cartsService.createCart(
         Number(request.body.customer_id),
         Number(request.body.product_id),
         Number(request.body.amount)
      );
      if (created) {
         response.status(201);
      }

      return JSON.stringify({ message: "Заказ успешно создан!" });
   }

   async getAllCarts(): Promise<Cart[]> {
      return this.cartsService.findAll();
   }

   async getCartById(request: RequestInterface): Promise<Cart> {
      if (!request.body || !request.params.id || !Number(request.params.id)) {
         throw CustomException.BadRequest("No params for this request was provided");
      }
      return this.cartsService.findOne(Number(request.params.id));
   }
}
