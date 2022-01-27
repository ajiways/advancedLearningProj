import { EMethod } from "../infterfaces/server.interface";
import { AuthService } from "../services/auth.service";
import { AuthController } from "../controllers/auth.controller";
import { Server } from "../server";

/**
 * @swagger
 * components:
 *    schemas:
 *       User:
 *          type: object
 *          properties:
 *             id:
 *                type: number
 *                description: The auto-generate id of the user
 *             firstName:
 *                type: string
 *                description: User's first name
 *             password:
 *                type: string
 *                description: User's hashed password
 *          example:
 *             id: 15
 *             firstName: SomeName
 *             password: '!#*R@#H*&HR@QYUBNFUYQ#BRF&*!^B@#F&QT!@#'
 */

/**
 * @swagger
 * /jwt/login:
 *    post:
 *       summary: Try to log into the system via login and password
 *       tags: [POST]
 *       consumes:
 *          - application/json
 *       requestBody:
 *          required: true
 *          content:
 *             application/json:
 *                schema:
 *                   type: object
 *                   properties:
 *                      email:
 *                         type: string
 *                         description: The user's email to be authenticated with
 *                         example: 'some@email.com'
 *                      password:
 *                         type: string
 *                         description: User's password to prove he is a owner of his account
 *                         example: 'somepassword'
 *       responses:
 *          200:
 *             description: Successful logged in
 *             content:
 *                application/json:
 *                   schema:
 *                      type: array
 *                      items:
 *                        $ref: '#/components/schemas/User'
 *          400:
 *             description: Already logged in
 *             content:
 *                application/text:
 *                   schema:
 *                      type: object
 *                      properties:
 *                         message:
 *                            type: string
 *                            description: description of the error
 *                            example: "Some error description"
 *          404:
 *             description: User with the provided login was not found
 *             content:
 *                application/text:
 *                   schema:
 *                      type: object
 *                      properties:
 *                         message:
 *                            type: string
 *                            description: description of the error
 *                            example: "Some error description"
 *
 */

/**
 * @swagger
 * /jwt/logout:
 *    get:
 *       summary: Try to log out
 *       responses:
 *          200:
 *             description: Successful logged out
 *             content:
 *                application/json:
 *                   schema:
 *                      type: object
 *                      properties:
 *                        message:
 *                          type: string
 *                          description: details message
 *                          example: Successfully logged out!
 *          400:
 *             description: User needs to be logged in to logging out
 *             content:
 *                application/text:
 *                   schema:
 *                      type: object
 *                      properties:
 *                         message:
 *                            type: string
 *                            description: description of the error
 *                            example: "Some error description"
 */

export async function authRouter(serverInstance: Server) {
  const provider = serverInstance.getDBConnection();
  const authService = new AuthService(provider);
  const authController = new AuthController(authService);

  serverInstance.addHandler(
    EMethod.POST,
    "/jwt/login",
    authController.login.bind(authController)
  );
  serverInstance.addHandler(
    EMethod.GET,
    "/jwt/logout",
    authController.logout.bind(authController)
  );
}
