
const dbconnect = () => {
    const mongoose = require('mongoose');
    const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_NAMEDB}?retryWrites=true&w=majority`;
    mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            }).then(() => {
            console.log('Connection established.');
        })
        .catch(error => console.log('Error connecting:' + error));}

module.exports = dbconnect;