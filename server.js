require('dotenv').config({ path: '.env' });
const express = require('express');
const app = express();

const logger = require('morgan');

const config = require('./config/config');
const { sequelize } = require('./models');

sequelize.sync({ force: true })
    .then(() => {
        console.log('Database sync');
    })
    .catch((err) => {
        console.error(err);
    });

app.use(logger('dev'));
app.use(express.json());

app.use('/api', require('./src'));

app.listen(config.PORT, () => {
    console.log(`> Server is running on port ${config.PORT}`);
});
