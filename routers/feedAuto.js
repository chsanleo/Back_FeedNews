const router = require('express').Router();
const feedAutoController = require('../core/controllers/feedAutoController.js');

router.get('/auto', feedAutoController.feedAutoAll);

module.exports = router;