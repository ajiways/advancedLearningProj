import { ProductImage } from "../entities/productImage.entity";
import { Connection, Repository } from "typeorm";

export class ProductImagesService {
   private readonly attachmentsRepository: Repository<ProductImage>;

   constructor(dataProvider: Connection) {
      this.attachmentsRepository = dataProvider.getRepository(ProductImage);
   }

   async findAll(): Promise<ProductImage[]> {
      return this.attachmentsRepository.find();
   }

   async findOne(id: number): Promise<ProductImage> {
      const result = await this.attachmentsRepository.findOne(id);
      if (!result) {
         throw new Error("Empty querry result!");
      }
      return result;
   }
}
