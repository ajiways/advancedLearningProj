import { Currency } from "../entities/currency.entity";
import { CustomException } from "../exceptions/custom.exception";
import { RequestInterface } from "../infterfaces/request.interface";
import { CurrenciesService } from "../services/currencies.service";
import { isCorrectNumber } from "../guards/isSorrectNumber.guard";

export class CurrenciesController {
  private readonly currenciesService: CurrenciesService;

  constructor(currenciesService: CurrenciesService) {
    this.currenciesService = currenciesService;
  }

  async getAllCurrencies(): Promise<Currency[]> {
    return this.currenciesService.findAll();
  }

  async getCurrencyById(request: RequestInterface): Promise<Currency> {
    if (!isCorrectNumber(request.params.id)) {
      throw CustomException.BadRequest(
        "No params for this request was provided"
      );
    }
    return this.currenciesService.findOne(request.params.id);
  }
}
