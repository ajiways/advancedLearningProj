import { Property } from "../entities/property.entity";
import { Connection, Repository } from "typeorm";
import { CustomExcteption } from "../exceptions/custom.exception";

export class PropertiesService {
   private readonly propertiesRepository: Repository<Property>;

   constructor(dataProvider: Connection) {
      this.propertiesRepository = dataProvider.getRepository(Property);
   }

   async findAll(): Promise<Property[]> {
      const result = this.propertiesRepository.find();
      if (!result) {
         throw CustomExcteption.NotFound("Empty query result!");
      }
      return result;
   }

   async findOne(id: number): Promise<Property> {
      const result = await this.propertiesRepository.findOne(id);
      if (!result) {
         throw CustomExcteption.NotFound("Empty query result!");
      }
      return result;
   }
}
