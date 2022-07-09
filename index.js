const express = require('express');
const app = express();
const cors = require('cors');

const logger = require('./config/log4js-config.js');
var log4js = require('log4js');
app.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'auto' }));


require('dotenv').config();


const dbconnect = require('./core/database/config/mongoDb.js');
dbconnect();


const feedRouter = require('./routers/feedRouter.js');


app.use(cors());
app.use(express.json());


//#region 
app.use('/feed', feedRouter);


let port = process.env.PORT;
app.listen(port, () => {
    console.log(`Running on port ${port}.`);
});