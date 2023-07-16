const express = require('express');
const router = express.Router();

const { userRegister, userLogin } = require('./user.controller');
const { userRegisterValidator, userLoginValidator } = require("./user.validator");
const { validatorCheckerMiddleware } = require("../../middleware/validator.middleware");

router.post('/register', userRegisterValidator, validatorCheckerMiddleware, userRegister);
router.get('/login', userLoginValidator, validatorCheckerMiddleware, userLogin);

module.exports = router;
