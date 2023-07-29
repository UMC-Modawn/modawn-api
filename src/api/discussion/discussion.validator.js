const { query, param, body} = require("express-validator");

exports.getDiscussionsValidator = [
    query('offset').isInt({ min: 0 }).optional(),
    query('category').isString().optional(),
    query('searchTerm').isString().optional(),
    query('limit').isInt({ min: 0 }).optional(),
];

exports.getDiscussionByIdxValidator = [
    param('idx').isInt({ min: 0 })
];

exports.addDiscussionBodyValidator = [
    body('title').isString(),
    body('content').isString(),
    body('categoryIdx').isInt({ min: 0 }),
    body('url').isString().optional(),
    body('imgUrl').isString().optional(),
    body('endDate').isDate(),
]
