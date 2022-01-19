import { serverInstance } from "../main";
import { EMethod } from "../infterfaces/server.interface";
import { ProductImagesService } from "../services/productImages.service";
import { ProductImagesController } from "../controllers/productsImages.controller";

/**
 * @swagger
 * components:
 *    schemas:
 *       Productimage:
 *          type: object
 *          properties:
 *             id:
 *                type: number
 *                description: The auto-generate id of the product image
 *             original_attachment_id:
 *                type: number
 *                description: The id of the original attachment for this image
 *             small_attachment_id:
 *                type: number
 *                description: The if of the small attachment for this image
 *             range:
 *                type: number
 *                description: i forgot for what it is here, sry
 *          example:
 *             id: 15
 *             original_attachment_id: 131
 *             small_attachment_id: 132
 *             range: input some text here
 */

/**
 * @swagger
 * /productimages:
 *    get:
 *       summary: Returns an array of product images
 *       tags: [All entities]
 *       responses:
 *          200:
 *             description: Array of product images
 *             content:
 *                application/json:
 *                   schema:
 *                      type: array
 *                      items:
 *                        $ref: '#/components/schemas/Productimage'
 */

/**
 * @swagger
 * /productimages/{id}:
 *    get:
 *       summary: Returns one product image with the provided id
 *       tags: [All entities]
 *       parameters:
 *          - in: path
 *            name: id
 *            schema:
 *               type: string
 *            required: true
 *            description: The product image id
 *       responses:
 *          200:
 *             description: Single product image
 *             content:
 *                application/json:
 *                   schema:
 *                      $ref: '#/components/schemas/Productimage'
 */

export async function productImagesRouter() {
   const provider = serverInstance.getDBConnection();
   const productImagesService = new ProductImagesService(provider);
   const productImagesController = new ProductImagesController(productImagesService);

   serverInstance.addHandler(
      EMethod.GET,
      "/productimages",
      productImagesController.getAllProductImages.bind(productImagesController)
   );

   serverInstance.addHandler(
      EMethod.GET,
      "/productimages/:id",
      productImagesController.getProductImageById.bind(productImagesController)
   );
}
