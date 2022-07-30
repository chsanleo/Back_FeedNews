const _dataScrapingService = require('../services/dataScrapingService.js');
const messages = require('../utils/messages.js');

const feedAutoController = {
    async feedAutoAll(req, res) {
        try {
            await _dataScrapingService.scrapingAndStorageAll();
            res.status(202).send();
        } catch (error) {
            global.loggererror.error(error.message);
            res.status(500).send({ message: messages.genericError });
        }
    }
};

module.exports = feedAutoController;