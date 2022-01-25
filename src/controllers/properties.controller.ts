import { Property } from "../entities/property.entity";
import { PropertiesService } from "../services/properties.service";
import { RequestInterface } from "../infterfaces/request.interface";
import { isCorrectNumber } from "../guards/isCorrectNumber.guard";

export class PropertiesController {
  private readonly propertiesService: PropertiesService;

  constructor(propertiesService: PropertiesService) {
    this.propertiesService = propertiesService;
  }

  async getAllProperties(): Promise<Property[]> {
    return this.propertiesService.findAll();
  }

  async getPropertyById(request: RequestInterface): Promise<Property> {
    if (!isCorrectNumber(request.params.id)) {
      throw new Error("Bad request");
    }
    return this.propertiesService.findOne(request.params.id);
  }
}
