const { getDiscussionByIdxValidator } = require("../discussion/discussion.validator");
const { query } = require("express-validator");

exports.getOpinionsValidator = [
    query('type').isString().optional(),
    query('offset').isInt({ min: 0 }).optional(),
    query('limit').isInt({ min: 0 }).optional(),
];
