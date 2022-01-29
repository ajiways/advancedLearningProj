import express from "express";
import { CustomException } from "../exceptions/custom.exception";
import { RequestInterface } from "../infterfaces/request.interface";
import { AuthService } from "../services/auth.service";
import { isCorrectString } from "../guards/isCorrectString.guard";
import { responseInterface } from "../infterfaces/response.interface";

export class AuthController {
   private readonly authService: AuthService;

   constructor(authService: AuthService) {
      this.authService = authService;
   }

   async login(request: RequestInterface): Promise<responseInterface> {
      if (request.user) {
         throw CustomException.BadRequest("Already logged in");
      }

      if (!isCorrectString(request.body.email) || !isCorrectString(request.body.password)) {
         throw CustomException.BadRequest("No email or password was provided");
      }

      const token = await this.authService.login(request.body.email, request.body.password);

      return {
         message: "Добро пожаловать!",
         cookie: {
            token,
         },
      };
   }

   async logout(request: express.Request, response: express.Response): Promise<Record<string, string>> {
      const token = request.cookies.token;
      if (!token) {
         throw CustomException.BadRequest("To log out, log in first");
      }

      response.clearCookie("token");
      response.status(200);
      return { message: "Successfully logged out!" };
   }
}
