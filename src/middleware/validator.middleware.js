const { validationResult } = require('express-validator');
const { responseFailedWrapper } = require('../util');

exports.validatorCheckerMiddleware = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json(responseFailedWrapper(errors.array()));
    }

    next();
}
