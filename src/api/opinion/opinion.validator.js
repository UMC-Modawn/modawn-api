const { getDiscussionByIdxValidator } = require("../discussion/discussion.validator");
const { query, param} = require("express-validator");

exports.getOpinionIdxValidator = [
    param('opinionIdx').isInt({ min: 0 }),
];

exports.getOpinionsValidator = [
    query('type').isString().optional(),
    query('offset').isInt({ min: 0 }).optional(),
    query('limit').isInt({ min: 0 }).optional(),
];
