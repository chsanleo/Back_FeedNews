const _dataScrapingPAISService = require('./dataScrapingPAISService.js');
const _feedRespository = require('../repositories/feedRepository.js');
const Utils = require('../utils/utils.js');

const dataScrapingService = {
    async scrapingAndStorageAll() {
        try {
            let feedList = [];
            feedList = await _dataScrapingPAISService.scrapeData();
            for (let feed of feedList ) {
                if(Utils.isEmptyObject(await _feedRespository.getByTitle(feed.title))) {
                    await _feedRespository.create(feed);
                }
            }
            
        } catch (error) { throw Error('ScrapingAndStorageAll Feed -- ' + error.message); }
    }
};

module.exports = dataScrapingService;