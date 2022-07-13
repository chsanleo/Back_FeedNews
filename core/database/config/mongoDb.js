
    const mongoose = require('mongoose');
    const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_NAMEDB}?retryWrites=true&w=majority`;
const connectDB =  async () => {
    mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            }).then(() => {
            console.log('Connection established.');
        })
        .catch(error => console.log('Error connecting:' + error));}
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

module.exports = { connectDB, disconnectDB }