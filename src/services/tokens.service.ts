import jwt, { JwtPayload } from "jsonwebtoken";
import { configService } from "./config.service";

export interface userData extends JwtPayload {
   id: number;
   firstName: string;
   password: string;
}

class TokensService {
   generateToken(payload: Record<string, string>): string {
      const token = jwt.sign(payload, configService.secret);
      return token;
   }

   validateToken(token: unknown): userData | null {
      try {
         const decodedData = jwt.verify(String(token), configService.secret) as userData;
         return decodedData;
      } catch (error) {
         return null;
      }
   }
}

export default new TokensService();
