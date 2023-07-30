const discussionService = require("../api/discussion/discussion.service");

exports.discussionParamMiddleware = async (req, res, next) => {
    const { discussionIdx } = req.params;

    req.discussion = await discussionService.getExistDiscussionByIdx(discussionIdx);

    next();
}
