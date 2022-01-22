import { ProductsService } from "../services/products.service";
import { ProductsController } from "../controllers/products.controller";
import { Server } from "../server";
import { EMethod } from "../infterfaces/server.interface";

/**
 * @swagger
 * components:
 *    schemas:
 *       Product:
 *          type: object
 *          properties:
 *             id:
 *                type: number
 *                description: The auto-generate id of the product
 *             caption:
 *                type: string
 *                description: Caption of the product
 *             category_id:
 *                type: number
 *                description: category id for this product
 *             description:
 *                type: string
 *                description: the product description
 *             price:
 *                type: number
 *                description: the price of this product
 *             currency_id:
 *                type: number
 *                description: currency id for this product
 *             brand_id:
 *                type: number
 *                description: brand id for this product
 *             available_amount:
 *                type: number
 *                description: available amount of this product
 *          example:
 *             id: 15
 *             caption: Some product name here
 *             category_id: 123
 *             description: Some product description
 *             price: 10000
 *             currency_id: 321
 *             brand_id: 2
 *             available_amount: 50
 */

/**
 * @swagger
 * /products:
 *    get:
 *       summary: Returns an array of products
 *       tags: [All entities]
 *       responses:
 *          200:
 *             description: Array of products
 *             content:
 *                application/json:
 *                   schema:
 *                      type: array
 *                      items:
 *                        $ref: '#/components/schemas/Product'
 */

/**
 * @swagger
 * /products/{id}:
 *    get:
 *       summary: Returns one product with the provided id
 *       tags: [All entities]
 *       parameters:
 *          - in: path
 *            name: id
 *            schema:
 *               type: string
 *            required: true
 *            description: The product id
 *       responses:
 *          200:
 *             description: Single product
 *             content:
 *                application/json:
 *                   schema:
 *                      $ref: '#/components/schemas/Product'
 */

export async function productsRouter(serverInstance: Server) {
   const provider = serverInstance.getDBConnection();
   const productsService = new ProductsService(provider);
   const productsController = new ProductsController(productsService);

   serverInstance.addHandler(
      EMethod.GET,
      "/products",
      productsController.getAllProducts.bind(productsController)
   );

   serverInstance.addHandler(
      EMethod.GET,
      "/products/:id",
      productsController.getProductById.bind(productsController)
   );
}
