const opinionRepository = require('./opinion.repository');

exports.getOpinions = async (query) => {
    return opinionRepository.getOpinions(query);
}

exports.getOpinionsOrderByLikeCount = async (discussionIdx, type) => {
    const [result] = await opinionRepository.getOpinionsOrderByLikeCount(discussionIdx, type);
    return result;
}

exports.getOpinionsCountByDiscussionIdx = async (discussionIdx) => {
    return opinionRepository.getOpinionsCountByDiscussionIdx(discussionIdx);
}
