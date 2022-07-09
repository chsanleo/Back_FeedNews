const _feedService = require('../services/feedService.js');
const conversionReturn = require('../model/conversionToReturn.js');

let errorMsg = 'Error, contact with the Administrator.';

const feedTodayController = {
    async getAllToday(req, res){
        try {
            let feedList = [];
            for (let feed of await _feedService.getAllToday()) {
                feedList.push(conversionReturn.feed_To_return(feed));
            }
            res.status(202).send(feedList);
        } catch (error) {
            global.loggererror.error(error.message);
            res.status(500).send({ message: errorMsg });
        }
    }
};

module.exports = feedTodayController;