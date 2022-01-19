import { serverInstance } from "../main";
import { EMethod } from "../infterfaces/server.interface";
import { BrandsService } from "../services/brands.service";
import { BrandsController } from "../controllers/brands.controller";

/**
 * @swagger
 * components:
 *    schemas:
 *       Brand:
 *          type: object
 *          properties:
 *             id:
 *                type: number
 *                description: The auto-generate id of the attachment
 *             caption:
 *                type: string
 *                description: Caption of the brand
 *             logoAttachmentId:
 *                type: number
 *                description: id of this brand attachment
 *          example:
 *             id: 15
 *             caption: Some Brand
 *             logoAttachmentId: 14
 */

/**
 * @swagger
 * /brands:
 *    get:
 *       summary: Returns an array of brands
 *       tags: [All entities]
 *       responses:
 *          200:
 *             description: Array of brands
 *             content:
 *                application/json:
 *                   schema:
 *                      type: array
 *                      items:
 *                        $ref: '#/components/schemas/Brand'
 */

/**
 * @swagger
 * /brands/{id}:
 *    get:
 *       summary: Returns one brand with the provided id
 *       tags: [All entities]
 *       parameters:
 *          - in: path
 *            name: id
 *            schema:
 *               type: string
 *            required: true
 *            description: The brand id
 *       responses:
 *          200:
 *             description: Single brand
 *             content:
 *                application/json:
 *                   schema:
 *                      $ref: '#/components/schemas/Brand'
 */

export async function brandsRouter() {
   const provider = serverInstance.getDBConnection();
   const brandsService = new BrandsService(provider);
   const brandsController = new BrandsController(brandsService);

   serverInstance.addHandler(EMethod.GET, "/brands", brandsController.getAllBrands.bind(brandsController));

   serverInstance.addHandler(
      EMethod.GET,
      "/brands/:id",
      brandsController.getBrandById.bind(brandsController)
   );
}
