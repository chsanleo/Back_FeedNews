const router = require('express').Router();
const Utils = require('../core/utils/utils.js')

router.get('/healthcheck', (req, res) => res.status(202).send('OK  -  ' + Utils.dateNowSQL()));

module.exports = router;