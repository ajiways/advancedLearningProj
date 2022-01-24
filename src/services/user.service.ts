import { Connection, Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { CustomExcteption } from "../exceptions/custom.exception";

export class UsersService {
   private readonly usersRepository: Repository<User>;

   constructor(dataProvider: Connection) {
      this.usersRepository = dataProvider.getRepository(User);
   }

   async findAll(): Promise<User[]> {
      const result = await this.usersRepository.find();
      if (!result) {
         throw CustomExcteption.NotFound("Empty querry result!");
      }
      return result;
   }

   async findOne(id: number): Promise<User> {
      const result = await this.usersRepository.findOne({ where: { id: id } });
      if (!result) {
         throw CustomExcteption.NotFound("Empty querry result!");
      }
      return result;
   }
}
