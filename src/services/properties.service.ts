import { Property } from "../entities/property.entity";
import { Connection, Repository } from "typeorm";

export class PropertiesService {
   private readonly propertiesRepository: Repository<Property>;

   constructor(dataProvider: Connection) {
      this.propertiesRepository = dataProvider.getRepository(Property);
   }

   async findAll(): Promise<Property[]> {
      return this.propertiesRepository.find();
   }

   async findOne(id: number): Promise<Property> {
      const result = await this.propertiesRepository.findOne(id);
      if (!result) {
         throw new Error("Empty querry result!");
      }
      return result;
   }
}
