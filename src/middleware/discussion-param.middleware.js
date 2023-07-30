const discussionService = require("../api/discussion/discussion.service");

exports.discussionParamMiddleware = async (req, res, next) => {
    const { discussionIdx } = req.params;

    try {
        req.discussion = await discussionService.getExistDiscussionByIdx(discussionIdx);
        next();
    } catch (e) {
        next(e);
    }

}
