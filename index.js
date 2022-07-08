const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();

app.use(cors());
app.use(express.json());

let port = process.env.PORT;
app.listen(port, () => {
    console.log(`Running on port ${port}.`);
});