const discussionLikeRepository = require('./discussion-like.repository');

exports.getDiscussionLikeCounts = async (discussionIdx) => {
    return discussionLikeRepository.getDiscussionLikeCounts(discussionIdx);
}

exports.isUserDiscussionLike = async (userIdx, discussionIdx) => {
    const result = await discussionLikeRepository.getDiscussionLike(userIdx, discussionIdx);
    return !!result;
}
