const opinionReplyRepository = require('./opinion-reply.repository');
const opinionService = require('../opinion/opinion.service');
const { OpinionType } = require("../../../models/opinion/opinion.constant");
const RequestException = require("../../error/request.exception");
const { HttpStatus } = require("../../error/error.constant");

exports.addOpinionReply = async (user, opinionIdx, body) => {
    if (!Object.values(OpinionType).includes(body.type)) {
        throw new RequestException('존재하지 않는 의견 타입입니다.', HttpStatus.BAD_REQUEST);
    }

    const opinion = await opinionService.getOpinionByIdx(opinionIdx);

    const opinionReply = opinionReplyRepository.createInstance({
        userIdx: user.idx,
        opinionIdx: opinion.idx,
        opinionType: body.type,
        content: body.content,
    });

    return opinionReplyRepository.addOpinionReply(opinionReply);
};

exports.getOpinionReplyByIdx = async (opinionReplyIdx) => {
    const opinionReply = await opinionReplyRepository.getOpinionReplyByIdx(opinionReplyIdx);
    if (!opinionReply) {
        throw new RequestException('존재하지 않는 댓글입니다.', HttpStatus.BAD_REQUEST);
    }
    return opinionReply;
}

exports.deleteOpinionReply = async (user, opinionIdx, opinionReplyIdx) => {
    await opinionService.getOpinionByIdx(opinionIdx);

    const opinionReply = await this.getOpinionReplyByIdx(opinionReplyIdx);
    if (opinionReply.userIdx !== user.idx) {
        throw new RequestException('삭제 권한이 없습니다.', HttpStatus.FORBIDDEN);
    }

    return opinionReplyRepository.deleteOpinionReply(opinionReply);
}
