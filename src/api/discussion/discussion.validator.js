const { query, param } = require("express-validator");

exports.getDiscussionsValidator = [
    query('offset').isInt({ min: 0 }).optional(),
    query('category').isString().optional(),
    query('searchTerm').isString().optional(),
    query('limit').isInt({ min: 0 }).optional(),
];

exports.getDiscussionByIdxValidator = [
    param('idx').isInt({ min: 0 })
];
