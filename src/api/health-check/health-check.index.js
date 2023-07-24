const express = require('express');
const router = express.Router();

const healthCheckController = require('./health-check.controller');

router.get('/', healthCheckController.healthCheck);

module.exports = router;
