const { query, param, body } = require("express-validator");

exports.getOpinionIdxValidator = [
    param('opinionIdx').isInt({ min: 0 }),
];

exports.getOpinionsValidator = [
    query('type').isString().optional(),
    query('offset').isInt({ min: 0 }).optional(),
    query('limit').isInt({ min: 0 }).optional(),
];

exports.addOpinionValidator = [
    body('title').isString(),
    body('type').isString(),
    body('assert').isString(),
    body('reason').isString(),
    body('content').isString(),
    body('url').isString().optional({ values: 'null' }),
    body('imgUrl').isString().optional({ values: 'null' }),
];

exports.modifyOpinionValidator = [
    ...this.getOpinionIdxValidator,
    ...this.addOpinionValidator,
];
