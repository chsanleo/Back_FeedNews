const Validations = require('../utils/validations.js');

const conversionToModel = {
    data_To_feed(data){
        let feed = {
            title: data.title,
            body: data.body,
            image: data.image,
            imageLink: data.imageLink,
            source: data.source,
            publisher: data.publisher
        }

        Validations.isValidFeedModel(feed);
        return feed;
    }
};

module.exports = conversionToModel;