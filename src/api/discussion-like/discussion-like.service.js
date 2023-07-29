const discussionLikeRepository = require('./discussion-like.repository');

exports.getDiscussionLikeCounts = async (discussionIdx) => {
    return discussionLikeRepository.getDiscussionLikeCounts(discussionIdx);
}
