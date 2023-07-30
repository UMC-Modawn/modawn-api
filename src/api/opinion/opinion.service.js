const opinionRepository = require('./opinion.repository');

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
