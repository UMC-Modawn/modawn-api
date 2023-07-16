const { body } = require("express-validator");

exports.userRegisterValidator = [
    body('name').isString().notEmpty().withMessage('name is required'),
    body('nickname').isString().notEmpty().withMessage('nickname is required'),
    body('email').isEmail().notEmpty().withMessage('email is required'),
    body('password').isString().notEmpty().withMessage('password is required'),
    body('confirmPassword').isString().notEmpty().withMessage('confirmPassword is required'),
];
