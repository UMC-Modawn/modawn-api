const opinionRepository = require('./opinion.repository');

exports.getOpinions = async (query) => {
    return opinionRepository.getOpinions(query);
}

exports.getOpinionsCountByDiscussionIdx = async (discussionIdx) => {
    return opinionRepository.getOpinionsCountByDiscussionIdx(discussionIdx);
}
