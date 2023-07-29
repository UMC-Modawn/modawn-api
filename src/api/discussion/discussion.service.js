const discussionRepository = require('./discussion.repository');
const { HttpStatus } = require("../../error/error.constant");
const RequestException = require("../../error/request.exception");
const opinionService = require('../opinion/opinion.service');
const discussionLikeService = require('../discussion-like/discussion-like.service');
const { OpinionType } = require("../../../models/opinion/opinion.constant");

exports.getDiscussions = async (query) => {
    const { count, rows } = await discussionRepository.getDiscussions(query);
    const discussionLikeCounts = await Promise.all(rows.map(({ dataValues }) => discussionLikeService.getDiscussionLikeCounts(dataValues.idx)));

    return {
        count,
        rows: rows.map(({ dataValues }, idx) => {
            return {
                ...dataValues,
                discussionLikeCount: discussionLikeCounts[idx],
            }
        })
    };
}

exports.getDiscussionByIdx = async (user, idx) => {
    const discussion = await discussionRepository.getDiscussion(idx, user.idx);
    if (!discussion) {
        throw new RequestException('존재하지 않는 토론입니다.', HttpStatus.BAD_REQUEST);
    }
    const opinions = await opinionService.getOpinions({ discussionIdx: idx, type: OpinionType.APPROVE });
    console.log(opinions);
    return discussion;
}
