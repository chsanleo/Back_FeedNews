const Feed = require('../database/models/Feed.js');

const feedRepository = {
    async create (feed){ return await Feed.create(feed); }, 
    async get (_id) { return await Feed.findOne({ _id: _id, deleteAt: null }); },
    async getAll () { return Feed.find({ deleteAt: null }); },
    async update (_id, feed) { return Feed.updateOne({ _id: _id }), feed, { upsert:true } ; },
    async delete (_id) { return Feed.updateOne({ _id: _id }), { deleteAt: Date.now() }, { upsert:true } ;  }
};

module.exports = feedRepository;