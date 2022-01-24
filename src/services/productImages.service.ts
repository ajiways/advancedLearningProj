import { ProductImage } from "../entities/productImage.entity";
import { Connection, Repository } from "typeorm";
import { CustomExcteption } from "../exceptions/custom.exception";

export class ProductImagesService {
   private readonly attachmentsRepository: Repository<ProductImage>;

   constructor(dataProvider: Connection) {
      this.attachmentsRepository = dataProvider.getRepository(ProductImage);
   }

   async findAll(): Promise<ProductImage[]> {
      const result = this.attachmentsRepository.find();
      if (!result) {
         throw CustomExcteption.NotFound("Empty querry result!");
      }
      return result;
   }

   async findOne(id: number): Promise<ProductImage> {
      const result = await this.attachmentsRepository.findOne(id);
      if (!result) {
         throw CustomExcteption.NotFound("Empty querry result!");
      }
      return result;
   }
}
