import { EMethod } from "../infterfaces/server.interface";
import { AttachmentsService } from "../services/attachments.service";
import { AttachmentsController } from "../controllers/attachments.controller";
import { Server } from "../server";

/**
 * @swagger
 * components:
 *    schemas:
 *       Attachment:
 *          type: object
 *          properties:
 *             id:
 *                type: number
 *                description: The auto-generate id of the attachment
 *             type:
 *                type: enum
 *                description: Attachment type (SMALL or ORIGINAL)
 *             name:
 *                type: string
 *                description: Name of the attachment
 *             filePath:
 *                type: string
 *                description: Path to file
 *          example:
 *             id: 15
 *             type: "SMALL"
 *             name: Some name
 *             filePath: /some/path/to/file
 */

/**
 * @swagger
 * /attachments:
 *    get:
 *       summary: Returns an array of attachments
 *       tags: [All entities]
 *       responses:
 *          200:
 *             description: Array of attachments
 *             content:
 *                application/json:
 *                   schema:
 *                      type: array
 *                      items:
 *                        $ref: '#/components/schemas/Attachment'
 */

/**
 * @swagger
 * /attachments/{id}:
 *    get:
 *       summary: Returns one attachment with the provided id
 *       tags: [All entities]
 *       parameters:
 *          - in: path
 *            name: id
 *            schema:
 *               type: string
 *            required: true
 *            description: The attachment id
 *       responses:
 *          200:
 *             description: Single attachment
 *             content:
 *                application/json:
 *                   schema:
 *                      $ref: '#/components/schemas/Attachment'
 */

export async function attachmentsRouter(serverInstance: Server) {
   const provider = serverInstance.getDBConnection();
   const attachmentsService = new AttachmentsService(provider);
   const attachmentsController = new AttachmentsController(attachmentsService);

   serverInstance.addHandler(
      EMethod.GET,
      "/attachments",
      attachmentsController.getAllAttachments.bind(attachmentsController)
   );

   serverInstance.addHandler(
      EMethod.GET,
      "/attachments/:id",
      attachmentsController.getAttachmentById.bind(attachmentsController)
   );
}
