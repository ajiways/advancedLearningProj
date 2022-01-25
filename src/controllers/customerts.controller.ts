import { Customer } from "../entities/customer.entity";
import { RequestInterface } from "../infterfaces/request.interface";
import { CustomersService } from "../services/customers.service";
import { isCorrectNumber } from "../guards/isCorrectNumber.guard";

export class CustomersController {
  private readonly customersService: CustomersService;

  constructor(customersService: CustomersService) {
    this.customersService = customersService;
  }

  async getAllCustomers(): Promise<Customer[]> {
    return this.customersService.findAll();
  }

  async getCustomerById(request: RequestInterface): Promise<Customer> {
    if (!isCorrectNumber(request.params.id)) {
      throw new Error("Bad request");
    }
    return this.customersService.findOne(request.params.id);
  }
}
