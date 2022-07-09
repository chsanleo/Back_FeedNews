const router = require('express').Router();
const feedController = require('../core/controllers/feedController.js');

router.post('/create', feedController.create);
router.post('/', feedController.get);
router.get('/', feedController.getAll);
router.post('/update', feedController.update);
router.post('/delete', feedController.delete);

module.exports = router;