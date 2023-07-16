const { body } = require("express-validator");

exports.userRegisterValidator = [
    body('name').isString().notEmpty(),
    body('nickname').isString().notEmpty(),
    body('email').isEmail().notEmpty(),
    body('password').isString().notEmpty(),
    body('confirmPassword').isString().notEmpty(),
];

exports.userLoginValidator = [
    body('email').isEmail().notEmpty(),
    body('password').isString().notEmpty(),
];
