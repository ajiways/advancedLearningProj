import { serverInstance } from "../main";
import { EMethod } from "../infterfaces/server.interface";
import { CurrenciesService } from "../services/currencies.service";
import { CurrenciesController } from "../controllers/currencies.controller";

/**
 * @swagger
 * components:
 *    schemas:
 *       Currency:
 *          type: object
 *          properties:
 *             id:
 *                type: number
 *                description: The auto-generate id of the currency
 *             caption:
 *                type: string
 *                description: caption of the currency
 *             symbol:
 *                type: string
 *                description: symbol of the currency
 *          example:
 *             id: 15
 *             caption: Russian Rouble
 *             symbol: RUR
 */

/**
 * @swagger
 * /currencies:
 *    get:
 *       summary: Returns an array of currencies
 *       tags: [All entities]
 *       responses:
 *          200:
 *             description: Array of currencies
 *             content:
 *                application/json:
 *                   schema:
 *                      type: array
 *                      items:
 *                        $ref: '#/components/schemas/Currency'
 */

/**
 * @swagger
 * /currencies/{id}:
 *    get:
 *       summary: Returns one currency with the provided id
 *       tags: [All entities]
 *       parameters:
 *          - in: path
 *            name: id
 *            schema:
 *               type: string
 *            required: true
 *            description: The currency id
 *       responses:
 *          200:
 *             description: Single currency
 *             content:
 *                application/json:
 *                   schema:
 *                      $ref: '#/components/schemas/Currency'
 */

export async function currenciesRouter() {
   const provider = serverInstance.getDBConnection();
   const currenciesService = new CurrenciesService(provider);
   const currenciesController = new CurrenciesController(currenciesService);

   serverInstance.addHandler(
      EMethod.GET,
      "/currencies",
      currenciesController.getAllCurrencies.bind(currenciesController)
   );

   serverInstance.addHandler(
      EMethod.GET,
      "/currencies/:id",
      currenciesController.getCurrencyById.bind(currenciesController)
   );
}
