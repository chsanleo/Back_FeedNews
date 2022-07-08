const express = require('express');
const app = express();
const cors = require('cors');

//#region Logger
const logger = require('./config/log4js-config.js');
var log4js = require('log4js');

app.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'auto' }));
//#endregion
require('dotenv').config();

app.use(cors());
app.use(express.json());

let port = process.env.PORT;
app.listen(port, () => {
    console.log(`Running on port ${port}.`);
});