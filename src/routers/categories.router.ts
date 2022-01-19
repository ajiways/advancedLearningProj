import { serverInstance } from "../main";
import { EMethod } from "../infterfaces/server.interface";
import { CategoriesService } from "../services/categories.service";
import { CategoriesController } from "../controllers/categories.controller";

/**
 * @swagger
 * components:
 *    schemas:
 *       Category:
 *          type: object
 *          properties:
 *             id:
 *                type: number
 *                description: The auto-generate id of the category
 *             caption:
 *                type: string
 *                description: caption of the description
 *             parent_category_id:
 *                type: number
 *                description: id of the parent category
 *          example:
 *             id: 15
 *             caption: Some category name
 *             parent_category_id: 322
 */

/**
 * @swagger
 * /categories:
 *    get:
 *       summary: Returns an array of categories
 *       tags: [All entities]
 *       responses:
 *          200:
 *             description: Array of categories
 *             content:
 *                application/json:
 *                   schema:
 *                      type: array
 *                      items:
 *                        $ref: '#/components/schemas/Category'
 */

/**
 * @swagger
 * /categories/{id}:
 *    get:
 *       summary: Returns one category with the provided id
 *       tags: [All entities]
 *       parameters:
 *          - in: path
 *            name: id
 *            schema:
 *               type: string
 *            required: true
 *            description: The category id
 *       responses:
 *          200:
 *             description: Single category
 *             content:
 *                application/json:
 *                   schema:
 *                      $ref: '#/components/schemas/Category'
 */

export async function categoriesRouter() {
   const provider = serverInstance.getDBConnection();
   const categoriesService = new CategoriesService(provider);
   const categoriesController = new CategoriesController(categoriesService);

   serverInstance.addHandler(
      EMethod.GET,
      "/categories",
      categoriesController.getAllCategories.bind(categoriesController)
   );

   serverInstance.addHandler(
      EMethod.GET,
      "/categories/:id",
      categoriesController.getCategoryById.bind(categoriesController)
   );
}
