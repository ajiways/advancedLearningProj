import { ProductImage } from "../entities/productImage.entity";
import { ProductImagesService } from "../services/productImages.service";
import { RequestInterface } from "../infterfaces/request.interface";
import { CustomException } from "../exceptions/custom.exception";

export class ProductImagesController {
   private readonly productImagesService: ProductImagesService;

   constructor(productImagesService: ProductImagesService) {
      this.productImagesService = productImagesService;
   }

   async getAllProductImages(): Promise<ProductImage[]> {
      return this.productImagesService.findAll();
   }

   async getProductImageById(request: RequestInterface): Promise<ProductImage> {
      if (!request.body || !request.params.id || !Number(request.params.id)) {
         throw CustomException.BadRequest("No params for this request was provided");
      }
      return this.productImagesService.findOne(Number(request.params.id));
   }
}
