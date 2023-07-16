const express = require('express');
const router = express.Router();

const userApi = require('./api/user/user.index');

router.use('/user', userApi);

module.exports = router;
