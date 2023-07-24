const { HttpStatus } = require('../../error/error.constant');
const { responseSuccessWrapper } = require('../../util');
const db = require('../../../models');

exports.healthCheck = async (req, res) => {
    try {
        await db.sequelize.authenticate();

        const healthcheck = {
            uptime: process.uptime(),
            timestamp: new Date().toISOString(),
            db: 'OK',
        };
        res.status(HttpStatus.OK).json(responseSuccessWrapper(healthcheck));
    } catch (e) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(responseSuccessWrapper(e));
    }
}
