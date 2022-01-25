import { Cart } from "../entities/cart.entity";
import { CartsService } from "../services/carts.service";
import { RequestInterface } from "../infterfaces/request.interface";
import { CustomException } from "../exceptions/custom.exception";
import express from "express";
import { isCorrectNumber } from "../guards/isSorrectNumber.guard";

export class CartsController {
  private readonly cartsService: CartsService;

  constructor(cartsService: CartsService) {
    this.cartsService = cartsService;
  }

  async createCart(
    request: RequestInterface,
    response: express.Response
  ): Promise<string> {
    if (
      !isCorrectNumber(request.body.customer_id) ||
      !isCorrectNumber(request.body.product_id) ||
      !isCorrectNumber(request.body.amount)
    ) {
      throw CustomException.BadRequest("Неправильно заполнены поля в форме");
    }

    const created = await this.cartsService.createCart(
      request.body.customer_id,
      request.body.product_id,
      request.body.amount
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
    if (!isCorrectNumber(request.params.id)) {
      throw CustomException.BadRequest(
        "No params for this request was provided"
      );
    }
    return this.cartsService.findOne(request.params.id);
  }
}
