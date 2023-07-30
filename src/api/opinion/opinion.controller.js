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
