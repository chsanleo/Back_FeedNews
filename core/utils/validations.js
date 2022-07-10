const { default: mongoose } = require('mongoose');
const Utils = require('./utils.js');

const Validations = {
    isValidId(_id){
        if (!mongoose.Types.ObjectId.isValid(_id)) { throw Error(); }
    },
    isValidFeedModel(feed){
        let error = Utils.stringEmpty();

        let errorMsg = ' must be provided. ';
        if (Utils.isEmptyString(feed.title)) { error = 'Title '+ errorMsg;}
        if (Utils.isEmptyString(feed.body)) { error += ' Body '+ errorMsg; }
        if (Utils.isEmptyString(feed.source)) { error += ' Source '+ errorMsg; }
        if (Utils.isEmptyString(feed.publisher)) { error += ' Publisher '+ errorMsg; }

        if(!Utils.isEmptyString(error)){ throw Error(error); }
    }
};

module.exports = Validations;
