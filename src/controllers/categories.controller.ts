import { Category } from "../entities/category.entity";
import { CategoriesService } from "../services/categories.service";
import { RequestInterface } from "../infterfaces/request.interface";
import { CustomExcteption } from "../exceptions/custom.exception";

export class CategoriesController {
   private readonly categoriesService: CategoriesService;

   constructor(categoriesService: CategoriesService) {
      this.categoriesService = categoriesService;
   }

   async getAllCategories(): Promise<Category[]> {
      return this.categoriesService.findAll();
   }

   async getCategoryById(request: RequestInterface): Promise<Category> {
      if (!request.body || !request.params.id || !Number(request.params.id)) {
         throw CustomExcteption.BadRequest("No params for this request was provided");
      }
      return this.categoriesService.findOne(Number(request.params.id));
   }
}
