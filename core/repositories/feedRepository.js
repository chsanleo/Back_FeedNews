const Feed = require('../database/models/Feed.js');
const Utils = require('../utils/utils.js');

const feedRepository = {
    async create (feed){ 
        feed.createAt = Utils.dateNowSQL();
         await Feed.create(feed);
    }, 
    async get (_id) { return await Feed.findById(_id); },
    async getByTitle(title) { return await Feed.findOne({ title: title });},
    async getAll () { return Feed.find({ deleteAt: null }); },
    async getAllByDate(date) { return Feed.find({ createAt: {$regex: date} });},
    async update (_id, feed) {
        feed.updateAt = Utils.dateNowSQL();
        return await Feed.updateOne({ _id: _id }), feed, { upsert:true } ;
    },
    async delete (_id) { return await Feed.deleteOne({ _id: _id });  }
};

module.exports = feedRepository;