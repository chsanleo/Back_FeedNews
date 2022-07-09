const mongoose = require('moongoose');

const FeedSchema = mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    image: {
        data: Buffer, 
        contentType: String
    },
    imageLink: { type: String, required: false },
    source: { type: String, required: true },
    publisher: { type: String, required: true },
    origin: { type: String, required: true },
    createAt: { type: String, required: true },
    updateAt: { type: String, required: false },
    deleteAt:{ type: String, required: false }
});

const FeedModel = mongoose.model('Feed', FeedSchema);
module.exports = FeedModel;