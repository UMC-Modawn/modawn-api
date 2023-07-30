const { getOpinionIdxValidator } = require("../opinion/opinion.validator");
const { body, param } = require("express-validator");

exports.addOpinionReplyValidator = [
    ...getOpinionIdxValidator,
    body('type').isString(),
    body('content').isString(),
];

exports.deleteOpinionReplyValidator = [
    ...getOpinionIdxValidator,
    param('opinionReplyIdx').isInt({ min: 0 }),
];
