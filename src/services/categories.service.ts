import { Category } from "../entities/category.entity";
import { Connection, Repository } from "typeorm";
import { CustomExcteption } from "../exceptions/custom.exception";

export class CategoriesService {
   private readonly categoriesRepository: Repository<Category>;

   constructor(dataProvider: Connection) {
      this.categoriesRepository = dataProvider.getRepository(Category);
   }

   async findAll(): Promise<Category[]> {
      const result = this.categoriesRepository.find();
      if (!result) {
         throw CustomExcteption.NotFound("Empty query result!");
      }
      return result;
   }

   async findOne(id: number): Promise<Category> {
      const result = await this.categoriesRepository.findOne(id);
      if (!result) {
         throw CustomExcteption.NotFound("Empty query result!");
      }
      return result;
   }
}
