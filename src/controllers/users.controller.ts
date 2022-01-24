import { RequestInterface } from "../infterfaces/request.interface";
import { CustomExcteption } from "../exceptions/custom.exception";
import { UsersService } from "../services/user.service";
import { User } from "../entities/user.entity";

export class UsersController {
   private readonly usersService: UsersService;

   constructor(usersService: UsersService) {
      this.usersService = usersService;
   }

   async getAllUsers(): Promise<User[]> {
      return this.usersService.findAll();
   }

   async getUserById(request: RequestInterface): Promise<User> {
      if (!request.body || !request.params.id || !Number(request.params.id)) {
         throw CustomExcteption.BadRequest("No params for this request was provided");
      }
      return this.usersService.findOne(Number(request.params.id));
   }
}
