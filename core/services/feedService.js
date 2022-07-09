const _feedRespository = require('../repositories/feedRepository.js');
const Validations = require('../utils/validations.js');

const FeedService = {
    async create(feed) {
        try {
            feed.createAt = Date.now().toString();
            return await _feedRespository.create(feed);
        } catch (error) { throw Error('Create Feed -- ' + error.message); }
    },
    async get(_id) {
        try {
            Validations.isValidId(_id);
            return await _feedRespository.get(_id);
        } catch (error) { throw Error ('Get Feed ' + error.message); }
    },
};

module.exports = FeedService;