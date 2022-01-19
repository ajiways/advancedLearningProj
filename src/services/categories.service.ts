import { Category } from "../entities/category.entity";
import { Connection, Repository } from "typeorm";

export class CategoriesService {
   private readonly categoriesRepository: Repository<Category>;

   constructor(dataProvider: Connection) {
      this.categoriesRepository = dataProvider.getRepository(Category);
   }

   async findAll(): Promise<Category[]> {
      return this.categoriesRepository.find();
   }

   async findOne(id: number): Promise<Category> {
      const result = await this.categoriesRepository.findOne(id);
      if (!result) {
         throw new Error("Empty querry result!");
      }
      return result;
   }
}
