const { responseFailedWrapper, responseSuccessWrapper} = require("../../util");
const discussionService = require("./discussion.service");
const { HttpStatus } = require("../../error/error.constant");

exports.getDiscussions = async (req, res) => {
    try {
        const discussions = await discussionService.getDiscussions(req.query);
        res.status(HttpStatus.OK).json(responseSuccessWrapper(discussions));
    } catch (e) {
        console.error(e);
        res.status(e.status).json(responseFailedWrapper(e.message));
    }
}
