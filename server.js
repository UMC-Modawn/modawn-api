require('dotenv').config({ path: '.env' });
const express = require('express');
const app = express();

const logger = require('morgan');

const config = require('./config/config');

app.use(logger('dev'));
app.use(express.json());

app.use('/api', require('./src'));

app.listen(config.PORT, () => {
    console.log(`> Server is running on port ${config.PORT}`);
});
