import { Product } from "../entities/product.entity";
import { ProductsService } from "../services/products.service";
import { RequestInterface } from "../infterfaces/request.interface";

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
         throw new Error("Bad request");
      }
      return this.productsService.findOne(Number(request.params.id));
   }
}
