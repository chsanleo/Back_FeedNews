const mongoose = require('mongoose');

const { MongoMemoryServer } = require('mongodb-memory-server');
let mongod = null;

const connectDB =  async () => {

    let uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_NAMEDB}?retryWrites=true&w=majority`;

    if(process.env.NODE_ENV === 'test'){
        mongod = await MongoMemoryServer.create();
        uri = mongod.getUri();
    }

    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        })
        .then(() => { console.log('Connection established.'); });
    };

const disconnectDB = async () => {
    try {
        await mongoose.connection.close();
            if (mongod) {
                await mongod.stop();
            }
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const clear = async () => {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
      await collections[key].deleteMany({});
    }
  };

module.exports = { connectDB, disconnectDB, clear }