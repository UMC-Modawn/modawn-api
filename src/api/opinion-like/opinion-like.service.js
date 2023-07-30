const opinionLikeRepository = require('./opinion-like.repository');

exports.getOpinionLikeCountByOpinionIdx = async (opinionIdx) => {
    return opinionLikeRepository.getOpinionLikeCount(opinionIdx);
}
