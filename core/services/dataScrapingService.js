const _dataScrapingPAISService = require('./dataScrapingPAISService.js');
const _dataScrapingMUNDOService = require('./dataScrapingMundoService.js');
const _feedRespository = require('../repositories/feedRepository.js');
const Utils = require('../utils/utils.js');

const dataScrapingService = {
    async scrapingAndStorageAll() {
        try {
            let feedList = [];
            let feedListPais =[];
            let feedListMundo = [];

            feedListPais = await _dataScrapingPAISService.scrapData();
            feedListMundo = await _dataScrapingMUNDOService.scrapData();

            Array.prototype.push.apply(feedList, await _dataScrapingPAISService.scrapData());

            for (let feed of feedList) {
                if(Utils.isEmpty(await _feedRespository.getByTitle(feed.title))) {
                    await _feedRespository.create(feed);
                }
            }
            
        } catch (error) { throw Error('ScrapingAndStorageAll Feed -- ' + error.message); }
    }
};

module.exports = dataScrapingService;