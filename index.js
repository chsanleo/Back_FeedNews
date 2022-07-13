const express = require('express');
const app = express();
const cors = require('cors');

const logger = require('./config/log4js-config.js');
var log4js = require('log4js');
app.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'auto' }));


require('dotenv').config();


const { connectDB } = require('./core/database/config/mongoDb.js');
connectDB();


const healthcheck = require('./routers/healthcheck.js');
const swaggerRouter = require('./routers/swaggerRouter.js');
const feedRouter = require('./routers/feedRouter.js');
const feedTodayRouter = require('./routers/feedToday.js');
const feedAutoRouter = require('./routers/feedAuto.js');

app.use(cors());
app.use(express.json());


app.use('/', healthcheck);
app.use('/', swaggerRouter)
app.use('/feed', feedRouter);
app.use('/feed', feedTodayRouter);
app.use('/feed', feedAutoRouter);


let port = process.env.PORT;
const server = app.listen(port, () => {
    console.log(`Running on port ${port}.`);
});

module.exports = { app, server };