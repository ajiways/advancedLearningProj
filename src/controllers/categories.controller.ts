import { Category } from "../entities/category.entity";
import { CategoriesService } from "../services/categories.service";
import { RequestInterface } from "../infterfaces/request.interface";

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
         throw new Error("Bad request");
      }
      return this.categoriesService.findOne(Number(request.params.id));
   }
}
