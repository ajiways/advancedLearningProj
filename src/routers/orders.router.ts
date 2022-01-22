import { Server } from "../server";
import { EMethod } from "../infterfaces/server.interface";
import { OrdersService } from "../services/orders.service";
import { OrdersController } from "../controllers/orders.controller";

/**
 * @swagger
 * components:
 *    schemas:
 *       Order:
 *          type: object
 *          properties:
 *             id:
 *                type: number
 *                description: The auto-generate id of the order
 *             customer_id:
 *                type: number
 *                description: id of the user this order for
 *             status:
 *                type: enum
 *                description: status of the order ("PREPARING", "REGISTRATION", "PAYING")
 *             created_at:
 *                type: timestamp
 *                description: date when this order was created
 *             updated_at:
 *                type: timestamp
 *                description: date when the order was updated last time
 *          example:
 *             id: 15
 *             customer_id: 10
 *             status: "PREPARING"
 *             created_at: 151517175815
 *             updated_at: 178171723511
 */

/**
 * @swagger
 * /orders:
 *    get:
 *       summary: Returns an array of orders
 *       tags: [All entities]
 *       responses:
 *          200:
 *             description: Array of orders
 *             content:
 *                application/json:
 *                   schema:
 *                      type: array
 *                      items:
 *                        $ref: '#/components/schemas/Order'
 */

/**
 * @swagger
 * /orders/{id}:
 *    get:
 *       summary: Returns one order with the provided id
 *       tags: [All entities]
 *       parameters:
 *          - in: path
 *            name: id
 *            schema:
 *               type: string
 *            required: true
 *            description: The order id
 *       responses:
 *          200:
 *             description: Single order
 *             content:
 *                application/json:
 *                   schema:
 *                      $ref: '#/components/schemas/Order'
 */

export async function ordersRouter(serverInstance: Server) {
   const provider = serverInstance.getDBConnection();
   const ordersService = new OrdersService(provider);
   const ordersController = new OrdersController(ordersService);

   serverInstance.addHandler(EMethod.GET, "/orders", ordersController.getAllOrders.bind(ordersController));

   serverInstance.addHandler(
      EMethod.GET,
      "/orders/:id",
      ordersController.getOrderById.bind(ordersController)
   );
}
