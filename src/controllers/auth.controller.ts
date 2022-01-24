import express, { NextFunction } from "express";
import { CustomExcteption } from "../exceptions/custom.exception";
import { RequestInterface } from "../infterfaces/request.interface";
import { AuthService } from "../services/auth.service";
import tokensService, { userData } from "../services/tokens.service";

export class AuthController {
   private readonly authService: AuthService;

   constructor(authService: AuthService) {
      this.authService = authService;
   }

   async login(request: RequestInterface, response: express.Response): Promise<string> {
      if (request.user) {
         throw CustomExcteption.BadRequest("Already logged in");
      }

      if (!request.body.email || !request.body.password) {
         throw CustomExcteption.BadRequest("No email or password was provided");
      }

      const decodedData = (await this.authService.login(
         String(request.body.email),
         String(request.body.password)
      )) as userData;

      if (decodedData.valid) {
         const payload = {
            user: decodedData.user,
         };
         const token = tokensService.generateToken(payload);
         if (response) {
            response.cookie("token", token);
         }
         return JSON.stringify({ message: "Добро пожаловать!" });
      } else {
         throw CustomExcteption.BadRequest("Bad request");
      }
   }
}
