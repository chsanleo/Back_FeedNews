const axios = require('axios');
const cheerio = require('cheerio');

const Validations = require('../utils/validations.js');
const Utils = require('../utils/utils.js');

const url = "https://elpais.com";

const dataScrapingPAISService = {
    async scrapData() {
        try {
            const { data } = await axios.get(url);

            let feedList = [];
            let $ = cheerio.load(data);
            let listItems = $(".c-d");
        
            listItems.each((idx, el) => {

                let sourceUrl = $(el).find('header').find('h2').find('a').attr('href');    
                if(!sourceUrl.includes(Utils.dmySLQ())){ return; }
                
                try{
                    let feed = {
                        title: $(el).find('header').find('h2').find('a').text(),
                        body: $(el).find('p').text(),
                        image: Utils.stringEmpty(),
                        imageLink: $(el).find('figure').find('img').attr('src'),
                        source: sourceUrl.includes(url) ? sourceUrl : url.concat(sourceUrl),
                        publisher: 'El pais',
                        writer: $(el).find('div').find('a').text(),
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

module.exports = dataScrapingPAISService;