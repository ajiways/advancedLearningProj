import { Product } from "../entities/product.entity";
import { ProductsService } from "../services/products.service";
import { RequestInterface } from "../infterfaces/request.interface";
import { CustomExcteption } from "../exceptions/custom.exception";

export class ProductsController {
   private readonly productsService: ProductsService;

   constructor(productsService: ProductsService) {
      this.productsService = productsService;
   }

   async getAllProducts(): Promise<Product[]> {
      return this.productsService.findAll();
   }

   async getProductById(request: RequestInterface): Promise<Product> {
      if (!request.body || !request.params.id || !Number(request.params.id)) {
         throw CustomExcteption.BadRequest("No params for this request was provided");
      }
      return this.productsService.findOne(Number(request.params.id));
   }
}
