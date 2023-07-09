const mysql = require('mysql');
const config = require('./config');

const mysqlConfig = {
    host: config.MYSQL_HOST,
    user: config.MYSQL_USER,
    password: config.MYSQL_PASSWORD,
    database: config.MYSQL_DATABASE,
    port: config.PORT,
};

const mysqlConnection = mysql.createConnection(mysqlConfig);

mysqlConnection.connect((err) => {
    if (err) throw err;
    console.log('mysql is connected successfully!');
});

module.exports = mysqlConnection;
