import { serverInstance } from "../main";
import { EMethod } from "../infterfaces/server.interface";
import { CartsService } from "../services/carts.service";
import { CartsController } from "../controllers/carts.controller";

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
 *                type: number
 *                description: id of order that was generated for this cart
 *             amount:
 *                type: number
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

export async function cartRouter() {
   const provider = serverInstance.getDBConnection();
   const cartsService = new CartsService(provider);
   const cartsController = new CartsController(cartsService);

   serverInstance.addHandler(EMethod.GET, "/carts", cartsController.getAllCarts.bind(cartsController));

   serverInstance.addHandler(EMethod.GET, "/carts/:id", cartsController.getCartById.bind(cartsController));
}
