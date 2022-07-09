const express = require('express');
const app = express();
const cors = require('cors');

//#region Logger
const logger = require('./config/log4js-config.js');
var log4js = require('log4js');

app.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'auto' }));
//#endregion


//#region Config
require('dotenv').config();

//#region Load_DB
const dbconnect = require('./core/database/config/mongoDb.js');
dbconnect();
//#endregion

app.use(cors());
app.use(express.json());
//#endregion


let port = process.env.PORT;
app.listen(port, () => {
    console.log(`Running on port ${port}.`);
});