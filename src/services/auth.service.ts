import { Repository, Connection } from "typeorm";
import { User } from "../entities/user.entity";
import bcrypt from "bcrypt";
import { CustomException } from "../exceptions/custom.exception";
import tokensService, { userData } from "./tokens.service";

export class AuthService {
  private readonly authRepository: Repository<User>;

  constructor(dataProvider: Connection) {
    this.authRepository = dataProvider.getRepository(User);
  }

  async login(email: string, password: string): Promise<string> {
    const candidate = (await this.authRepository.findOne({
      where: { email },
    })) as userData;

    if (!candidate) {
      throw CustomException.BadRequest("Wrong email or password");
    }

    const match = bcrypt.compareSync(password, candidate.password);

    if (!match) {
      throw CustomException.BadRequest("Wrong password");
    }

    return tokensService.generateToken(candidate);
  }
}
