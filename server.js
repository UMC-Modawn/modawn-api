require('dotenv').config({ path: '.env' });
const express = require('express');
const app = express();
const fs = require('fs');

const logger = require('morgan');

const config = require('./config/config');
const { sequelize } = require('./models');
const { Environment } = require("./server.constant");
const cors = require("cors");
const {processCatchBlock} = require("./src/util");

sequelize.sync({ force: config.ENV === Environment.DEVELOPMENT })
    .then(() => {
        console.log('Database sync');
        app.listen(config.PORT, () => {
            console.log('    __  _______  ____  ___ _       ___   __   ___    ____  ____')
            console.log('   /  |/  / __ \\/ __ \\/   | |     / / | / /  /   |  / __ \\/  _/')
            console.log('  / /|_/ / / / / / / / /| | | /| / /  |/ /  / /| | / /_/ // /  ')
            console.log(' / /  / / /_/ / /_/ / ___ | |/ |/ / /|  /  / ___ |/ ____// /   ')
            console.log('/_/  /_/\\____/_____/_/  |_|__/|__/_/ |_/  /_/  |_/_/   /___/   ')
            console.log(`> Server is running on port ${config.PORT}`);
        });
    })
    .catch((err) => {
        console.error(err);
    });

const logCurrentDate = new Date();
const logFileName = './logs/log-' + logCurrentDate.getFullYear() + '-' + (logCurrentDate.getMonth() + 1) + '-' + logCurrentDate.getDate() + '.log';
app.use(logger('combined', { stream: fs.createWriteStream(logFileName, { flags: 'a' }) }));
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use('/api', require('./src'));

app.use((err, req, res, next) => {
    processCatchBlock(err, res);
});
