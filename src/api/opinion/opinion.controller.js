const opinionService = require('./opinion.service');
const opinionLikeService = require('../opinion-like/opinion-like.service');
const { HttpStatus } = require("../../error/error.constant");
const { responseSuccessWrapper, processCatchBlock } = require("../../util");

exports.getOpinions = async (req, res) => {
    try {
        const { count, rows } = await opinionService.getOpinionsByDiscussionIdx(req.discussion.idx, req.query);
        const opinionLikeCounts = await Promise.all(rows.map((opinion) => opinionLikeService.getOpinionLikeCountByOpinionIdx(opinion.idx)));

        return res.status(HttpStatus.OK).json(
            responseSuccessWrapper(
                {
                    count,
                    rows: rows.map((opinion, idx) => {
                        return {
                            ...opinion.dataValues,
                            opinionLikeCount: opinionLikeCounts[idx]
                        }
                    })
                }
            )
        );
    } catch (e) {
        processCatchBlock(e, res);
    }
}

exports.getOpinionByIdx = async (req, res) => {
    try {
        const opinion = await opinionService.getOpinionAllInfoByIdx(req.params.opinionIdx);
        return res.status(HttpStatus.OK).json(responseSuccessWrapper(opinion));
    } catch (e) {
        processCatchBlock(e, res);
    }
}

exports.addOpinionLike = async (req, res) => {
    try {
        await opinionLikeService.addOpinionLike(req.user.idx, req.params.opinionIdx);
        return res.status(HttpStatus.CREATED).json(responseSuccessWrapper());
    } catch (e) {
        processCatchBlock(e, res);
    }
}

exports.addOpinion = async (req, res) => {
    try {
        await opinionService.addOpinion(req.user, req.discussion, req.body);
        return res.status(HttpStatus.CREATED).json(responseSuccessWrapper());
    } catch (e) {
        processCatchBlock(e, res);
    }
}

exports.modifyOpinion = async (req, res) => {
    try {
        await opinionService.modifyOpinion(req.user, req.params.opinionIdx, req.body);
        return res.status(HttpStatus.OK).json(responseSuccessWrapper());
    } catch (e) {
        processCatchBlock(e, res);
    }
}

exports.deleteOpinion = async (req, res) => {
    try {
        await opinionService.deleteOpinion(req.user, req.params.opinionIdx);
        return res.status(HttpStatus.OK).json(responseSuccessWrapper());
    } catch (e) {
        processCatchBlock(e, res);
    }
}
