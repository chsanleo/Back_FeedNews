const router = require('express').Router();
const Utils = require('../core/utils/utils.js')

/**
 * @swagger
 * /healthcheck:
*    get:
*     description: Check the online of the app 
*     responses:
*       202:
*         schema:
*           type: object
*/
router.get('/healthcheck', (req, res) => res.status(202).send('OK  -  ' + Utils.dateNowSQL()));

module.exports = router;