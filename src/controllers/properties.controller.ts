import { Property } from "../entities/property.entity";
import { PropertiesService } from "../services/properties.service";
import { RequestInterface } from "../infterfaces/request.interface";
import { CustomException } from "../exceptions/custom.exception";
import { isCorrectNumber } from "../guards/isSorrectNumber.guard";

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
      throw CustomException.BadRequest(
        "No params for this request was provided"
      );
    }
    return this.propertiesService.findOne(request.params.id);
  }
}
