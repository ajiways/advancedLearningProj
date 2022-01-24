import { EMethod } from "../infterfaces/server.interface";
import { CartsService } from "../services/carts.service";
import { CartsController } from "../controllers/carts.controller";
import { Server } from "../server";
import { authMiddleware } from "../middlewares/auth.middleware";
import { ProductsService } from "../services/products.service";
import { OrdersService } from "../services/orders.service";
import { UsersService } from "../services/user.service";

/**
 *
 * @swagger
 * tags:
 *    name: POST
 *    description: For post requests
 */

/**
 * @swagger
 * components:
 *    schemas:
 *       Cart:
 *          type: object
 *          properties:
 *             id:
 *                type: number
 *                description: The auto-generate id of the cart
 *             order_id:
 *                type: string
 *                description: id of order that was generated for this cart
 *             amount:
 *                type: string
 *                description: number of products in this cart
 *          example:
 *             id: 15
 *             order_id: 133
 *             amount: 7
 */

/**
 * @swagger
 * /carts:
 *    get:
 *       summary: Returns an array of carts
 *       tags: [All entities]
 *       responses:
 *          200:
 *             description: Array of carts
 *             content:
 *                application/json:
 *                   schema:
 *                      type: array
 *                      items:
 *                        $ref: '#/components/schemas/Cart'
 */

/**
 * @swagger
 * /cart/{id}:
 *    get:
 *       summary: Returns one cart with the provided id
 *       tags: [All entities]
 *       parameters:
 *          - in: path
 *            name: id
 *            schema:
 *               type: string
 *            required: true
 *            description: The cart id
 *       responses:
 *          200:
 *             description: Single cart
 *             content:
 *                application/json:
 *                   schema:
 *                      $ref: '#/components/schemas/Cart'
 */

/**
 * @swagger
 * /cart/create:
 *    post:
 *       summary: Create new cart with order inside
 *       tags: [POST]
 *       requestBody:
 *          required: true
 *          content:
 *             application/json:
 *                schema:
 *                   type: object
 *                   properties:
 *                      customerId:
 *                         type: string
 *                         description: The customer's id for this order
 *                         example: '10'
 *                      productId:
 *                         type: string
 *                         description: The product's id for this order
 *                         example: '322'
 *                      amount:
 *                         type: string
 *                         description: Amount of the products to be ordered
 *                         example: '14'
 *       responses:
 *          201:
 *             description: if cart and order was created successful
 *             content:
 *                application/json:
 *                   schema:
 *                      type: object
 *                      properties:
 *                         id:
 *                            type: number
 *                            description: The auto-generate id of the cart
 *                            example: 15
 *                         order_id:
 *                            type: string
 *                            description: id of order that was generated for this cart
 *                            example: '322'
 *                         amount:
 *                            type: string
 *                            description: number of products in this cart
 *                            example: '11'
 *          403:
 *             description: if user isn't authorized yet
 *             content:
 *                application/json:
 *                   schema:
 *                      type: object
 *                      properties:
 *                         message:
 *                            type: string
 *                            description: description of the error
 *                            example: "user not authorized"
 */

export async function cartRouter(serverInstance: Server) {
   const provider = serverInstance.getDBConnection();
   const productsService = new ProductsService(provider);
   const userService = new UsersService(provider);
   const ordersService = new OrdersService(provider, userService);
   const cartsService = new CartsService(provider, ordersService, productsService);
   const cartsController = new CartsController(cartsService);

   serverInstance.addHandler(EMethod.GET, "/carts", cartsController.getAllCarts.bind(cartsController));

   serverInstance.addHandler(EMethod.GET, "/carts/:id", cartsController.getCartById.bind(cartsController));

   serverInstance.addHandler(EMethod.POST, "/cart/create", cartsController.createCart.bind(cartsController), [
      authMiddleware,
   ]);
}
