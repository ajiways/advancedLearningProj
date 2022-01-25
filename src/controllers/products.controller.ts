import { Product } from "../entities/product.entity";
import { ProductsService } from "../services/products.service";
import { RequestInterface } from "../infterfaces/request.interface";
import { isCorrectNumber } from "../guards/isCorrectNumber.guard";

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
      throw new Error("Bad request");
    }
    return this.productsService.findOne(request.params.id);
  }
}
