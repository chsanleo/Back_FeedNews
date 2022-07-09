const _feedService = require('../services/feedService.js');
const conversionToModel = require('../model/conversionToModel.js');
const conversionReturn = require('../model/conversionToReturn.js');

let errorMsg = 'Error, contact with the Administrator.';

const feedController = {
    async create(req, res){
        try {
            let feed = await _feedService.create(conversionToModel.data_To_feed(req.body.data));
            res.status(201).send(conversionReturn.feed_To_return(feed));
        } catch(error) {
            global.loggererror.error(error.message);
            res.status(500).send({ message: errorMsg });
        }
    },
};

module.exports = feedController;