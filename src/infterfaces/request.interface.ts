import { User } from "../entities/user.entity";

export interface RequestInterface {
   params: Record<string, string>;
   body: Record<string, unknown>;
   user: User;
}
