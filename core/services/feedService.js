const _feedRespository = require('../repositories/feedRepository.js');
const Validations = require('../utils/validations.js');

const FeedService = {
    async create(feed) {
        try {
            feed.createAt = Date.now().toString();
            return await _feedRespository.create(feed);
        } catch (error) { throw Error('Create Feed -- ' + error.message); }
    },
};

module.exports = FeedService;