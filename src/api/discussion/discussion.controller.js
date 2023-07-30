const { responseSuccessWrapper, processCatchBlock } = require("../../util");
const discussionService = require("./discussion.service");
const discussionLikeService = require('../discussion-like/discussion-like.service');
const { HttpStatus } = require("../../error/error.constant");

exports.getDiscussions = async (req, res) => {
    try {
        const discussions = await discussionService.getDiscussions(req.query);
        res.status(HttpStatus.OK).json(responseSuccessWrapper(discussions));
    } catch (e) {
        processCatchBlock(e, res);
    }
}

exports.getDiscussionByIdx = async (req, res) => {
    try {
        const discussion = await discussionService.getDiscussionByIdx(req.user, req.params.discussionIdx);
        res.status(HttpStatus.OK).json(responseSuccessWrapper(discussion));
    } catch (e) {
        processCatchBlock(e, res);
    }
}

exports.addDiscussionLike = async (req, res) => {
    try {
        await discussionLikeService.addDiscussionLike(req.user.idx, req.params.discussionIdx);
        return res.status(HttpStatus.CREATED).json(responseSuccessWrapper());
    } catch (e) {
        processCatchBlock(e, res);
    }
}

exports.addDiscussion = async (req, res) => {
    try {
        await discussionService.addDiscussion(req.user, req.body);
        return res.status(HttpStatus.CREATED).json(responseSuccessWrapper());
    } catch (e) {
        processCatchBlock(e, res);

    }
}

exports.deleteDiscussion = async (req, res) => {
    try {
        await discussionService.deleteDiscussion(req.user, req.params.discussionIdx);
        return res.status(HttpStatus.OK).json(responseSuccessWrapper());
    } catch (e) {
        processCatchBlock(e, res);
    }
}

exports.updateDiscussionStatus = async (req, res) => {
    try {
        await discussionService.updateDiscussionStatus(req.user, req.params.discussionIdx, req.body.status);
        return res.status(HttpStatus.OK).json(responseSuccessWrapper());
    } catch (e) {
        processCatchBlock(e, res);
    }
}

exports.modifyDiscussion = async (req, res) => {
    try {
        await discussionService.modifyDiscussion(req.user, req.params.discussionIdx, req.body);
        return res.status(HttpStatus.OK).json(responseSuccessWrapper());
    } catch (e) {
        processCatchBlock(e, res);
    }
}
