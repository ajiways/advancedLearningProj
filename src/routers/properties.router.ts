import { serverInstance } from "../main";
import { EMethod } from "../infterfaces/server.interface";
import { PropertiesController } from "../controllers/properties.controller";
import { PropertiesService } from "../services/properties.service";

/**
 * @swagger
 * tags:
 *    name: All entities
 *    description: Just to hide default block
 */

/**
 * @swagger
 * components:
 *    schemas:
 *       Property:
 *          type: object
 *          properties:
 *             id:
 *                type: number
 *                description: The auto-generate id of the property
 *             caption:
 *                type: string
 *                description: caption of the property
 *             type:
 *                type: enum
 *                description: type of property ("TEXT", "NUMBER", "DATE", "COLUMN")
 *          example:
 *             id: 15
 *             caption: Some property name here
 *             type: "TEXT"
 */

/**
 * @swagger
 * /properties:
 *    get:
 *       summary: Returns an array of properties
 *       tags: [All entities]
 *       responses:
 *          200:
 *             description: Array of properties
 *             content:
 *                application/json:
 *                   schema:
 *                      type: array
 *                      items:
 *                        $ref: '#/components/schemas/Property'
 */

/**
 * @swagger
 * /properties/{id}:
 *    get:
 *       summary: Returns one property with the provided id
 *       tags: [All entities]
 *       parameters:
 *          - in: path
 *            name: id
 *            schema:
 *               type: string
 *            required: true
 *            description: The property id
 *       responses:
 *          200:
 *             description: Single property
 *             content:
 *                application/json:
 *                   schema:
 *                      $ref: '#/components/schemas/Property'
 */

export async function propertiesRouter() {
   const provider = serverInstance.getDBConnection();
   const propertiesService = new PropertiesService(provider);
   const propertiesController = new PropertiesController(propertiesService);

   serverInstance.addHandler(
      EMethod.GET,
      "/properties",
      propertiesController.getAllProperties.bind(propertiesController)
   );

   serverInstance.addHandler(
      EMethod.GET,
      "/properties/:id",
      propertiesController.getPropertyById.bind(propertiesController)
   );
}
