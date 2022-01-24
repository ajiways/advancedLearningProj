import express from "express";
import { User } from "../entities/user.entity";
import tokensService from "../services/tokens.service";

declare global {
   namespace Express {
      interface Request {
         user: User;
      }
   }
}

export async function authMiddleware(
   req: express.Request,
   res: express.Response,
   next: express.NextFunction
) {
   if (req.method === "OPTIONS") {
      next();
   }

   try {
      const token = req.cookies.token;
      const decodedData = tokensService.validateToken(token);

      if (!token || !decodedData) {
         return res.status(403).json({ message: "Пользователь не авторизирован" });
      }

      const user = await User.findOne({ where: { email: decodedData.user.email } });

      if (!user) {
         return res.status(403).json({ message: "Пользователь не авторизирован" });
      }

      req.user = user;
      next();
   } catch (error) {
      console.log(error);
      return res.status(403).json({ message: "Пользователь не авторизирован" });
   }
}
