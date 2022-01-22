import { Server } from "../server";
import { EMethod } from "../infterfaces/server.interface";
import { CustomersService } from "../services/customers.service";
import { CustomersController } from "../controllers/customerts.controller";

/**
 * @swagger
 * components:
 *    schemas:
 *       Customer:
 *          type: object
 *          properties:
 *             id:
 *                type: number
 *                description: The auto-generate id of the customer
 *             email:
 *                type: string
 *                description: user email
 *             phone:
 *                type: number
 *                description: user phone number
 *             first_name:
 *                type: string
 *                description: user first name
 *             last_name:
 *                type: string
 *                description: user last name
 *          example:
 *             id: 15
 *             email: some@mail.com
 *             phone: +79505925921
 *             first_name: Some Name
 *             last_name: Some Lastname
 */

/**
 * @swagger
 * /customers:
 *    get:
 *       summary: Returns an array of customers
 *       tags: [All entities]
 *       responses:
 *          200:
 *             description: Array of customers
 *             content:
 *                application/json:
 *                   schema:
 *                      type: array
 *                      items:
 *                        $ref: '#/components/schemas/Customer'
 */

/**
 * @swagger
 * /customers/{id}:
 *    get:
 *       summary: Returns one customer with the provided id
 *       tags: [All entities]
 *       parameters:
 *          - in: path
 *            name: id
 *            schema:
 *               type: string
 *            required: true
 *            description: The customer id
 *       responses:
 *          200:
 *             description: Single customer
 *             content:
 *                application/json:
 *                   schema:
 *                      $ref: '#/components/schemas/Customer'
 */

export async function customersRouter(serverInstance: Server) {
   const provider = serverInstance.getDBConnection();
   const customersService = new CustomersService(provider);
   const customersController = new CustomersController(customersService);

   serverInstance.addHandler(
      EMethod.GET,
      "/customers",
      customersController.getAllCustomers.bind(customersController)
   );

   serverInstance.addHandler(
      EMethod.GET,
      "/customers/:id",
      customersController.getCustomerById.bind(customersController)
   );
}
