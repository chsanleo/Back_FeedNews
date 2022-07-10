const _dataScrapingService = require('../services/dataScrapingService.js');

let errorMsg = 'Error, contact with the Administrator.';

const feedAutoController = {
    async feedAutoAll(req, res){
        try {
            await _dataScrapingService.scrapingAndStorageAll();
            res.status(202).send();
        } catch (error) {
            global.loggererror.error(error.message);
            res.status(500).send({ message: errorMsg });
        }
    }
};

module.exports = feedAutoController;