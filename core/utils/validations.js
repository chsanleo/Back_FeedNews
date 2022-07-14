const { default: mongoose } = require('mongoose');
const Utils = require('./utils.js');
const validUrl = require('valid-url');

let MAX_LENGTH_TITLE = 100;
let MAX_LENGTH_SOURCE = 100;
let MAX_LENGTH_PUBLISHER = 100;

const Validations = {
    isValidId(_id) {
        if(Utils.isEmpty(_id)) { throw Error (' _id is undefined or null. ');}
        if (!mongoose.Types.ObjectId.isValid(_id)) { throw Error(' The _id Object is not correct. '); }
    },
    isValidFeedModel(feed) {
        let error = Utils.stringEmpty();

        let errorMsg = ' must be provided. ';
        if (Utils.isEmptyString(feed.title)) { error = 'Title '+ errorMsg; }
        if (Utils.isEmptyString(feed.body)) { error += ' Body '+ errorMsg; }
        if (Utils.isEmptyString(feed.source)) { error += ' Source '+ errorMsg; }
        if (Utils.isEmptyString(feed.publisher)) { error += ' Publisher '+ errorMsg; }

        if(!Utils.isEmptyString(error)){ throw Error(error); }
    },
    isValidLogicFeed(feed) {
        let error = Utils.stringEmpty();

        if ( !validUrl.isUri(feed.source)) { error = 'Source does not have the correct format. '; }
        if ( feed.source.length > MAX_LENGTH_SOURCE) { error+= 'Source need to be shorter than' + MAX_LENGTH_SOURCE + 'characters. '; }
        if ( feed.title.length > MAX_LENGTH_TITLE) { error += ' Title need be shorter than ' + MAX_LENGTH_TITLE + ' characters. ' ;}
        if ( feed.publisher.length > MAX_LENGTH_PUBLISHER) { error+= ' Publisher need to be shorter than '+ MAX_LENGTH_PUBLISHER +' characters. ';}
        if ( !Utils.isEmptyString(feed.imageLink) && !validUrl.isUri(feed.imageLink)) { error+= ' ImageLink does not have the correct format. ';}

        if(!Utils.isEmptyString(error)){ throw Error(error); }
    }
};

module.exports = Validations;
