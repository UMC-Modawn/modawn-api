const express = require('express');
const router = express.Router();

const discussionController = require('./discussion.controller');
const { getDiscussionsValidator, getDiscussionByIdxValidator, addDiscussionBodyValidator} = require("./discussion.validator");
const { validatorCheckerMiddleware } = require("../../middleware/validator.middleware");
const { userAuthMiddleware } = require("../../middleware/user-auth.middleware");

router.get('/', getDiscussionsValidator, validatorCheckerMiddleware, discussionController.getDiscussions);
router.post('/', userAuthMiddleware, addDiscussionBodyValidator, validatorCheckerMiddleware, discussionController.addDiscussion);
router.get('/:discussionIdx', userAuthMiddleware, getDiscussionByIdxValidator, validatorCheckerMiddleware, discussionController.getDiscussionByIdx);
router.delete('/:discussionIdx', userAuthMiddleware, getDiscussionByIdxValidator, validatorCheckerMiddleware, discussionController.deleteDiscussion);
router.put('/:discussionIdx', userAuthMiddleware, getDiscussionByIdxValidator, addDiscussionBodyValidator, validatorCheckerMiddleware, discussionController.modifyDiscussion);
router.post('/:discussionIdx/like', userAuthMiddleware, getDiscussionByIdxValidator, validatorCheckerMiddleware, discussionController.addDiscussionLike);
router.put('/:discussionIdx/status', userAuthMiddleware, getDiscussionByIdxValidator, validatorCheckerMiddleware, discussionController.updateDiscussionStatus);

module.exports = router;
