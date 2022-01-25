import { Category } from "../entities/category.entity";
import { CategoriesService } from "../services/categories.service";
import { RequestInterface } from "../infterfaces/request.interface";
import { CustomException } from "../exceptions/custom.exception";
import { isCorrectNumber } from "../guards/isSorrectNumber.guard";

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
      throw CustomException.BadRequest(
        "No params for this request was provided"
      );
    }
    return this.categoriesService.findOne(request.params.id);
  }
}
