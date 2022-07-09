const Feed = require('../database/models/Feed.js');
const Utils = require('../utils/utils.js');

const feedRepository = {
    async create (feed){ 
        feed.createAt = Utils.dateNowSQL();
         await Feed.create(feed);
    }, 
    async get (_id) { return await Feed.findOne({ _id: _id, deleteAt: null }); },
    async getAll () { return Feed.find({ deleteAt: null }); },
    async update (_id, feed) {
        feed.updateAt = Utils.dateNowSQL();
        Feed.updateOne({ _id: _id }), feed, { upsert:true } ;
    },
    async delete (_id) { Feed.updateOne({ _id: _id }), { deleteAt: Utils.dateNowSQL() }, { upsert:true } ;  }
};

module.exports = feedRepository;