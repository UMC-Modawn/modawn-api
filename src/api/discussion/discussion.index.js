const express = require('express');
const router = express.Router();

const discussionController = require('./discussion.controller');
const { getDiscussionsValidator, getDiscussionByIdxValidator, addDiscussionBodyValidator} = require("./discussion.validator");
const { validatorCheckerMiddleware } = require("../../middleware/validator.middleware");
const { userAuthMiddleware } = require("../../middleware/user-auth.middleware");

router.get('/', getDiscussionsValidator, validatorCheckerMiddleware, discussionController.getDiscussions);
router.post('/', userAuthMiddleware, addDiscussionBodyValidator, validatorCheckerMiddleware, discussionController.addDiscussion);
router.get('/:idx', userAuthMiddleware, getDiscussionByIdxValidator, validatorCheckerMiddleware, discussionController.getDiscussionByIdx);
router.delete('/:idx', userAuthMiddleware, getDiscussionByIdxValidator, validatorCheckerMiddleware, discussionController.deleteDiscussion);
router.put('/:idx', userAuthMiddleware, getDiscussionByIdxValidator, addDiscussionBodyValidator, validatorCheckerMiddleware, discussionController.modifyDiscussion);
router.post('/:idx/like', userAuthMiddleware, getDiscussionByIdxValidator, validatorCheckerMiddleware, discussionController.addDiscussionLike);
router.put('/:idx/status', userAuthMiddleware, getDiscussionByIdxValidator, validatorCheckerMiddleware, discussionController.updateDiscussionStatus);

module.exports = router;
