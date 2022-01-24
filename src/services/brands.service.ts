import { Brand } from "../entities/brand.entity";
import { Connection, Repository } from "typeorm";
import { CustomException } from "../exceptions/custom.exception";

export class BrandsService {
   private readonly brandsRepository: Repository<Brand>;

   constructor(dataProvider: Connection) {
      this.brandsRepository = dataProvider.getRepository(Brand);
   }

   async findAll(): Promise<Brand[]> {
      const result = this.brandsRepository.find();
      if (!result) {
         throw CustomException.NotFound("Empty query result!");
      }
      return result;
   }

   async findOne(id: number): Promise<Brand> {
      const result = await this.brandsRepository.findOne(id);
      if (!result) {
         throw CustomException.NotFound("Empty query result!");
      }
      return result;
   }
}
