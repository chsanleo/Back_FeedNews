const router = require('express').Router();
const feedController = require('../core/controllers/feedController.js');


/**
 * @swagger
 * /feed/create:
*    post:
*     description: Create a new Feed 
*     parameters:
*       - name: body
*         in: body
*         required: true
*         schema:
*           type: object
*           required:
*             - title
*             - body
*             - source
*             - publisher
*           properties:
*             title:
*               type: string
*             body:
*               type: string
*             image:
*               type: string
*             imageLink:
*               type: string
*             source:
*               type: string
*             publisher:
*               type: string
*           example: {
*             "title": "Vacaciones en Agosto",
*             "body": "Las vacaciones en esta epoca del año ...",
*             "image": "Las vacaciones en esta epoca del año ...",
*             "imageLink": "http://periodico.es/imagenes/imagen.png",
*             "source": "http://periodico.es/vacaciones_agosto",
*             "publisher": "El periodico", 
*           }
*     responses:
*       201:
*         schema:
*           type: object
*       500:
 *         description: Error, contact with the Administrator.
*/
router.post('/create', feedController.create);
router.post('/', feedController.get);
router.get('/', feedController.getAll);
router.post('/update', feedController.update);
router.post('/delete', feedController.delete);

module.exports = router;