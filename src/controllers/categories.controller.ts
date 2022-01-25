import { Category } from "../entities/category.entity";
import { CategoriesService } from "../services/categories.service";
import { RequestInterface } from "../infterfaces/request.interface";
import { isCorrectNumber } from "../guards/isCorrectNumber.guard";

export class CategoriesController {
  private readonly categoriesService: CategoriesService;

  constructor(categoriesService: CategoriesService) {
    this.categoriesService = categoriesService;
  }

  async getAllCategories(): Promise<Category[]> {
    return this.categoriesService.findAll();
  }

  async getCategoryById(request: RequestInterface): Promise<Category> {
    if (!isCorrectNumber(request.params.id)) {
      throw new Error("Bad request");
    }
    return this.categoriesService.findOne(request.params.id);
  }
}
