const express = require('express');
const router = express.Router();

const { userRegister } = require('./user.controller');
const { userRegisterValidator } = require("./user.validator");
const { validatorCheckerMiddleware } = require("../../middleware/validator.middleware");

router.post('', userRegisterValidator, validatorCheckerMiddleware, userRegister);

module.exports = router;
