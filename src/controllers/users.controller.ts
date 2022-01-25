import { RequestInterface } from "../infterfaces/request.interface";
import { CustomException } from "../exceptions/custom.exception";
import { UsersService } from "../services/user.service";
import { User } from "../entities/user.entity";
import { isCorrectNumber } from "../guards/isSorrectNumber.guard";

export class UsersController {
  private readonly usersService: UsersService;

  constructor(usersService: UsersService) {
    this.usersService = usersService;
  }

  async getAllUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  async getUserById(request: RequestInterface): Promise<User> {
    if (!isCorrectNumber(request.params.id)) {
      throw CustomException.BadRequest(
        "No params for this request was provided"
      );
    }
    return this.usersService.findOne(request.params.id);
  }
}
