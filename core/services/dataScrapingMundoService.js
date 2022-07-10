const axios = require('axios');
const cheerio = require('cheerio');

const Validations = require('../utils/validations.js');
const Utils = require('../utils/utils.js');

const url = "https://www.elmundo.es/";

const dataScrapingMUNDOService = {
    async scrapData() {
        try {
            const { data } = await axios.get(url);

            let feedList= [];
            let $ = cheerio.load(data);
            let listItems = $('article');
        
            listItems.each((idx, el) => {

                let sourceUrl = $(el).find('a').attr('href');
                if(!sourceUrl.includes(Utils.dmySLQ().replace(/-/g,'/'))){ return; }

                try{
                    let feed = {
                        title: $(el).find('header').find('span').text().concat($(el).find('header').find('a').find('h2').text()),
                        body: 'without body',
                        image: Utils.stringEmpty(),
                        imageLink: $(el).find('picture').find('img').attr('src'),
                        source: sourceUrl,
                        publisher: 'El mundo',
                        writer: $(el).find('li').find('span').text(),
                        origin: 'auto'
                    };
                    
                    Validations.isValidFeedModel(feed);
                    feedList.push(feed);
                } catch(error){ }
            });
        return feedList;
        } catch (error) { global.loggererror.error(error.message); }
    }
};

module.exports = dataScrapingMUNDOService;