import { Product } from "../entities/product.entity";
import { ProductsService } from "../services/products.service";
import { RequestInterface } from "../infterfaces/request.interface";
import { CustomException } from "../exceptions/custom.exception";
import { isCorrectNumber } from "../guards/isSorrectNumber.guard";

export class ProductsController {
  private readonly productsService: ProductsService;

  constructor(productsService: ProductsService) {
    this.productsService = productsService;
  }

  async getAllProducts(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  async getProductById(request: RequestInterface): Promise<Product> {
    if (!isCorrectNumber(request.params.id)) {
      throw CustomException.BadRequest(
        "No params for this request was provided"
      );
    }
    return this.productsService.findOne(request.params.id);
  }
}
