const _feedRespository = require('../repositories/feedRepository.js');
const Validations = require('../utils/validations.js');
const Utils = require('../utils/utils.js');

const FeedService = {
    async create(feed) {
        try {
            feed.origin = 'manual';
            Validations.isValidLogicFeed(feed);
            await _feedRespository.create(feed);
        } catch (error) { throw Error('Create Feed -- ' + error.message); }
    },
    async get(_id) {
        try {
            Validations.isValidId(_id);
            return await _feedRespository.get(_id);
        } catch (error) { throw Error ('Get Feed ' + error.message); }
    },
    async getAll() {
        try {
            return await _feedRespository.getAll();
        } catch (error) { throw Error ('Get All Feed ' + error.message);}
    },
    async getAllToday(){
        try {
            return await _feedRespository.getAllByDate(Utils.dmySLQ());
        } catch (error) { throw Error ('Get All Today ' + error.message);}
    },
    async update(_id, feed){
        try {
            Validations.isValidId(_id);
            Validations.isValidLogicFeed(feed);
            await _feedRespository.update(_id,feed);
        } catch (error) { throw Error ('Update Feed ' + error.message);}
    },
    async delete(_id){
        try {
            Validations.isValidId(_id);
            await _feedRespository.delete(_id);
        } catch (error) { throw Error ('Delete Feed ' + error.message);}
    }
};

module.exports = FeedService;