import jwt, { JwtPayload } from "jsonwebtoken";
import { configService } from "./config.service";

export interface userData extends JwtPayload {
  id: number;
  firstName: string;
  password: string;
}

class TokensService {
  generateToken(payload: userData): string {
    return jwt.sign(payload, configService.secret);
  }

  validateToken(token: unknown): userData | null {
    try {
      return jwt.verify(String(token), configService.secret) as userData;
    } catch (error) {
      return null;
    }
  }
}

export default new TokensService();
