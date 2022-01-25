import { Brand } from "../entities/brand.entity";
import { RequestInterface } from "../infterfaces/request.interface";
import { BrandsService } from "../services/brands.service";
import { isCorrectNumber } from "../guards/isCorrectNumber.guard";

export class BrandsController {
  private readonly brandsService: BrandsService;

  constructor(brandsService: BrandsService) {
    this.brandsService = brandsService;
  }

  async getAllBrands(): Promise<Brand[]> {
    return this.brandsService.findAll();
  }

  async getBrandById(request: RequestInterface): Promise<Brand> {
    if (!isCorrectNumber(request.params.id)) {
      throw new Error("Bad request");
    }
    return this.brandsService.findOne(request.params.id);
  }
}
