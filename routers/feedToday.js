const router = require('express').Router();
const feedTodayController = require('../core/controllers/todayFeedController.js');

router.get('/today', feedTodayController.getAllToday);

module.exports = router;