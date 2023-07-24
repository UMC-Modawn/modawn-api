const express = require('express');
const router = express.Router();

const discussionController = require('./discussion.controller');
const { getDiscussionsValidator } = require("./discussion.validator");
const { validatorCheckerMiddleware } = require("../../middleware/validator.middleware");

router.get('/', getDiscussionsValidator, validatorCheckerMiddleware, discussionController.getDiscussions);

module.exports = router;
