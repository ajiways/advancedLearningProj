import { Property } from "../entities/property.entity";
import { PropertiesService } from "../services/properties.service";
import { RequestInterface } from "../infterfaces/request.interface";

export class PropertiesController {
   private readonly propertiesService: PropertiesService;

   constructor(propertiesService: PropertiesService) {
      this.propertiesService = propertiesService;
   }

   async getAllProperties(): Promise<Property[]> {
      return this.propertiesService.findAll();
   }

   async getPropertyById(request: RequestInterface): Promise<Property> {
      if (!request.body || !request.params.id || !Number(request.params.id)) {
         throw new Error("Bad request");
      }
      return this.propertiesService.findOne(Number(request.params.id));
   }
}
