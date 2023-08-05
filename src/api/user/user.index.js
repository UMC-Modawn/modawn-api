const express = require('express');
const router = express.Router();

const { userRegister, userLogin, getUserInfo } = require('./user.controller');
const { userRegisterValidator, userLoginValidator } = require("./user.validator");
const { validatorCheckerMiddleware } = require("../../middleware/validator.middleware");
const { userAuthMiddleware } = require("../../middleware/user-auth.middleware");

router.post('/register', userRegisterValidator, validatorCheckerMiddleware, userRegister);
router.post('/login', userLoginValidator, validatorCheckerMiddleware, userLogin);
router.get('/', userAuthMiddleware, getUserInfo);

module.exports = router;
