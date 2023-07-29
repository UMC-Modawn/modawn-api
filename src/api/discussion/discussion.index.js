const express = require('express');
const router = express.Router();

const discussionController = require('./discussion.controller');
const { getDiscussionsValidator, getDiscussionByIdxValidator} = require("./discussion.validator");
const { validatorCheckerMiddleware } = require("../../middleware/validator.middleware");
const { userAuthMiddleware } = require("../../middleware/user-auth.middleware");

router.get('/', getDiscussionsValidator, validatorCheckerMiddleware, discussionController.getDiscussions);
router.get('/:idx', userAuthMiddleware, getDiscussionByIdxValidator, validatorCheckerMiddleware, discussionController.getDiscussionByIdx);

module.exports = router;
