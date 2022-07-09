const { default: mongoose } = require('mongoose');

const Validations = {
    isValidId(_id){
        if (!mongoose.Types.ObjectId.isValid(_id)) { throw Error(); }
    }
};

module.exports = Validations;
