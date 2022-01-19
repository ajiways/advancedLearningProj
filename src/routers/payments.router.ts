import { serverInstance } from "../main";
import { EMethod } from "../infterfaces/server.interface";
import { PaymentsService } from "../services/payments.service";
import { PaymentsController } from "../controllers/payments.controller";

/**
 * @swagger
 * components:
 *    schemas:
 *       Payment:
 *          type: object
 *          properties:
 *             id:
 *                type: number
 *                description: The auto-generate id of the payment
 *             order_id:
 *                type: number
 *                description: id of the order what this payment for
 *             kind:
 *                type: string
 *                description: idk for sure what this field means xd
 *          example:
 *             id: 15
 *             order_id: 19
 *             kind: input some text here
 */

/**
 * @swagger
 * /payments:
 *    get:
 *       summary: Returns an array of payments
 *       tags: [All entities]
 *       responses:
 *          200:
 *             description: Array of payments
 *             content:
 *                application/json:
 *                   schema:
 *                      type: array
 *                      items:
 *                        $ref: '#/components/schemas/Payment'
 */

/**
 * @swagger
 * /payments/{id}:
 *    get:
 *       summary: Returns one payment with the provided id
 *       tags: [All entities]
 *       parameters:
 *          - in: path
 *            name: id
 *            schema:
 *               type: string
 *            required: true
 *            description: The payment id
 *       responses:
 *          200:
 *             description: Single payment
 *             content:
 *                application/json:
 *                   schema:
 *                      $ref: '#/components/schemas/Payment'
 */

export async function paymentsRouter() {
   const provider = serverInstance.getDBConnection();
   const paymentsService = new PaymentsService(provider);
   const paymentsController = new PaymentsController(paymentsService);

   serverInstance.addHandler(
      EMethod.GET,
      "/payments",
      paymentsController.getAllPayments.bind(paymentsController)
   );

   serverInstance.addHandler(
      EMethod.GET,
      "/payments/:id",
      paymentsController.getPaymentById.bind(paymentsController)
   );
}
