const express = require('express');
const app = express();
const cors = require('cors');

//#region Load_Logger
const logger = require('./config/log4js-config.js');
var log4js = require('log4js');

app.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'auto' }));
//#endregion

//#region Load_env
require('dotenv').config();
//#endregion

//#region Load_DB
const dbconnect = require('./core/database/config/mongoDb.js');
dbconnect();
//#endregion

//#region Load Router
const feedRouter = require('./routers/feedRouter.js');
//#endregion


//#region app
app.use(cors());
app.use(express.json());
//#endregion


//#region 
app.use('/feed', feedRouter);
//#endregion


let port = process.env.PORT;
app.listen(port, () => {
    console.log(`Running on port ${port}.`);
});