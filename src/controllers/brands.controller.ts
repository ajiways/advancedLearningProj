import { Brand } from "../entities/brand.entity";
import { CustomException } from "../exceptions/custom.exception";
import { RequestInterface } from "../infterfaces/request.interface";
import { BrandsService } from "../services/brands.service";

export class BrandsController {
   private readonly brandsService: BrandsService;

   constructor(brandsService: BrandsService) {
      this.brandsService = brandsService;
   }

   async getAllBrands(): Promise<Brand[]> {
      return this.brandsService.findAll();
   }

   async getBrandById(request: RequestInterface): Promise<Brand> {
      if (!request.body || !request.params.id || !Number(request.params.id)) {
         throw CustomException.BadRequest("No params for this request was provided");
      }
      return this.brandsService.findOne(Number(request.params.id));
   }
}
