const _feedService = require('../services/feedService.js');
const conversionToModel = require('../model/conversionToModel.js');
const conversionReturn = require('../model/conversionToReturn.js');
const messages = require('../utils/messages.js');

const feedController = {
    async create(req, res){
        try {
            await _feedService.create(conversionToModel.data_To_feed(req.body));
            res.status(201).send();
        } catch(error) {
            global.loggererror.error(error.message);
            res.status(500).send({ message:  messages.genericError });
        }
    },
    async get(req, res){
        try {
            let feed = await _feedService.get(req.body.id);
            if (feed) { res.status(202).send(conversionReturn.feed_To_return(feed)); }
            res.status(202).send();
        } catch (error) {
            global.loggererror.error(error.message);
            res.status(500).send({ message:  messages.genericError });
        }
    },
    async getAll(req, res){
        try {
            let feedList = [];
            for (let feed of await _feedService.getAll()) {
                feedList.push(conversionReturn.feed_To_return(feed));
            }
            res.status(202).send(feedList);
        } catch (error) {
            global.loggererror.error(error.message);
            res.status(500).send({ message:  messages.genericError });
        }
    },
    async update(req, res){
        try {
            await _feedService.update(req.body.id, conversionToModel.data_To_feed(req.body.data));
            res.status(202).send();
        } catch (error) {
            global.loggererror.error(error.message);
            res.status(500).send({ message:  messages.genericError });
        }
    },
    async delete(req, res){
        try {
            await _feedService.delete(req.body.id);
            res.status(202).send();
        } catch (error) {
            global.loggererror.error(error.message);
            res.status(500).send({ message:  messages.genericError });
        }
    }
};

module.exports = feedController;