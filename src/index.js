const express = require('express');
const router = express.Router();

const healthCheckApi = require('./api/health-check/health-check.index');
const userApi = require('./api/user/user.index');

router.use('/health-check', healthCheckApi);
router.use('/user', userApi);

module.exports = router;
