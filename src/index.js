const express = require('express');
const router = express.Router();

const healthCheckApi = require('./api/health-check/health-check.index');
const userApi = require('./api/user/user.index');
const discussionApi = require('./api/discussion/discussion.index');
const opinionApi = require('./api/opinion/opinion.index');
const storageApi = require('./api/storage/storage.index');
const { getDiscussionByIdxValidator } = require("./api/discussion/discussion.validator");
const { validatorCheckerMiddleware } = require("./middleware/validator.middleware");
const { userAuthMiddleware } = require("./middleware/user-auth.middleware");
const { discussionParamMiddleware } = require("./middleware/discussion-param.middleware");

router.use('/health-check', healthCheckApi);
router.use('/user', userApi);
router.use('/discussion', discussionApi);
router.use('/discussion/:discussionIdx/opinion', userAuthMiddleware, getDiscussionByIdxValidator, validatorCheckerMiddleware, discussionParamMiddleware, opinionApi);
router.use('/storage', storageApi);

module.exports = router;
