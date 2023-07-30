const opinionLikeRepository = require('./opinion-like.repository');
const opinionService = require('../opinion/opinion.service');

exports.getOpinionLikeCountByOpinionIdx = async (opinionIdx) => {
    return opinionLikeRepository.getOpinionLikeCount(opinionIdx);
}

exports.isUserOpinionLike = async (userIdx, opinionIdx) => {
    const result = await opinionLikeRepository.getOpinionLike(userIdx, opinionIdx);
    return !!result;
}

exports.addOpinionLike = async (userIdx, opinionIdx) => {
    const opinion = await opinionService.getOpinionByIdx(opinionIdx);
    const isExistOpinionLike = await this.isUserOpinionLike(userIdx, opinionIdx);
    if (isExistOpinionLike) {
        return opinionLikeRepository.deleteOpinionLike(userIdx, opinion.idx);
    }

    return opinionLikeRepository.addOpinionLike(userIdx, opinion.idx);
}
