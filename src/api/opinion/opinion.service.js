const opinionRepository = require('./opinion.repository');
const RequestException = require("../../error/request.exception");
const { HttpStatus } = require("../../error/error.constant");
const opinionLikeService = require('../opinion-like/opinion-like.service');
const { OpinionType } = require("../../../models/opinion/opinion.constant");

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

exports.addOpinion = async (user, discussion, body) => {
    if (!Object.values(OpinionType).includes(body.type)) {
        throw new RequestException('존재하지 않는 의견 타입입니다.', HttpStatus.BAD_REQUEST);
    }

    const opinion = opinionRepository.createInstance({
        userIdx: user.idx,
        discussionIdx: discussion.idx,
        title: body.title,
        type: body.type,
        assert: body.assert,
        reason: body.reason,
        content: body.content,
        url: body.url,
        imgUrl: body.imgUrl,
    });

    await opinion.save();

    return opinion;
}

exports.modifyOpinion = async (user, opinionIdx, body) => {
    const opinion = await this.getOpinionByIdx(opinionIdx);
    if (opinion.userIdx !== user.idx) {
        throw new RequestException('수정 권한이 없습니다.', HttpStatus.FORBIDDEN);
    }
    if (body.type && !Object.values(OpinionType).includes(body.type)) {
        throw new RequestException('존재하지 않는 의견 타입입니다.', HttpStatus.BAD_REQUEST);
    }

    Object.keys(opinion.dataValues).forEach((key) => {
        if (body[key] !== undefined) {
            opinion[key] = body[key];
        }
    });

    return opinionRepository.updateOpinion(opinion);
}

exports.deleteOpinion = async (user, opinionIdx) => {
    const opinion = await this.getOpinionByIdx(opinionIdx);
    if (opinion.userIdx !== user.idx) {
        throw new RequestException('삭제 권한이 없습니다.', HttpStatus.FORBIDDEN);
    }

    return opinionRepository.deleteOpinion(opinion);
}
