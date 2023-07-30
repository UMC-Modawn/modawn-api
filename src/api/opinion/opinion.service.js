const opinionRepository = require('./opinion.repository');
const RequestException = require("../../error/request.exception");
const { HttpStatus } = require("../../error/error.constant");
const opinionLikeService = require('../opinion-like/opinion-like.service');

exports.getOpinions = async (query) => {
    return opinionRepository.getOpinions(query);
}

exports.getOpinionsByDiscussionIdx = async (discussionIdx, query) => {
    return opinionRepository.getOpinions({ ...query, discussionIdx });
}

exports.getOpinionsOrderByLikeCount = async (discussionIdx, type) => {
    const [result] = await opinionRepository.getOpinionsOrderByLikeCount(discussionIdx, type);
    return result;
}

exports.getOpinionsCountByDiscussionIdx = async (discussionIdx) => {
    return opinionRepository.getOpinionsCountByDiscussionIdx(discussionIdx);
}

exports.getOpinionAllInfoByIdx = async (opinionIdx) => {
    const opinion = await opinionRepository.getOpinionWithReplyByIdx(opinionIdx);
    if (!opinion) {
        throw new RequestException('존재하지 않는 의견입니다.', HttpStatus.BAD_REQUEST);
    }

    const opinionLikeCount = await opinionLikeService.getOpinionLikeCountByOpinionIdx(opinionIdx);

    return {
        ...opinion.dataValues,
        opinionLikeCount
    };
}

exports.getOpinionByIdx = async (opinionIdx) => {
    const opinion = await opinionRepository.getOpinionByIdx(opinionIdx);
    if (!opinion) {
        throw new RequestException('존재하지 않는 의견입니다.', HttpStatus.BAD_REQUEST);
    }

    return opinion;
}
