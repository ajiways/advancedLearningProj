import { Repository, Connection } from "typeorm";
import { User } from "../entities/user.entity";
import bcrypt from "bcrypt";
import { CustomExcteption } from "../exceptions/custom.exception";

export class AuthService {
   private readonly authRepository: Repository<User>;

   constructor(dataProvider: Connection) {
      this.authRepository = dataProvider.getRepository(User);
   }

   async login(email: string, password: string): Promise<Record<string, boolean | User>> {
      const candidate = await this.authRepository.findOne({ where: { email } });
      if (!candidate) {
         throw CustomExcteption.NotFound("No user with the provided data was found");
      }

      const match = bcrypt.compareSync(password, candidate.password);
      if (!match) {
         throw CustomExcteption.BadRequest("Wrong password");
      }

      return {
         valid: true,
         user: candidate,
      };
   }
}
