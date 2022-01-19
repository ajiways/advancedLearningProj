import { Brand } from "../entities/brand.entity";
import { Connection, Repository } from "typeorm";

export class BrandsService {
   private readonly brandsRepository: Repository<Brand>;

   constructor(dataProvider: Connection) {
      this.brandsRepository = dataProvider.getRepository(Brand);
   }

   async findAll(): Promise<Brand[]> {
      return this.brandsRepository.find();
   }

   async findOne(id: number): Promise<Brand> {
      const result = await this.brandsRepository.findOne(id);
      if (!result) {
         throw new Error("Empty querry result!");
      }
      return result;
   }
}
