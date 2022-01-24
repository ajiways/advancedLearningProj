import { Property } from "../entities/property.entity";
import { PropertiesService } from "../services/properties.service";
import { RequestInterface } from "../infterfaces/request.interface";
import { CustomExcteption } from "../exceptions/custom.exception";

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
         throw CustomExcteption.BadRequest("No params for this request was provided");
      }
      return this.propertiesService.findOne(Number(request.params.id));
   }
}
