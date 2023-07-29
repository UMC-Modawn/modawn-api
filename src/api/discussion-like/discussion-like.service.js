const discussionLikeRepository = require('./discussion-like.repository');
const discussionService = require('../discussion/discussion.service');

exports.getDiscussionLikeCounts = async (discussionIdx) => {
    return discussionLikeRepository.getDiscussionLikeCounts(discussionIdx);
}

exports.isUserDiscussionLike = async (userIdx, discussionIdx) => {
    const result = await discussionLikeRepository.getDiscussionLike(userIdx, discussionIdx);
    return !!result;
}

exports.addDiscussionLike = async (userIdx, discussionIdx) => {
    const discussion = await discussionService.getExistDiscussionByIdx(discussionIdx);
    const isExistDiscussionLike = await this.isUserDiscussionLike(userIdx, discussionIdx);
    if (isExistDiscussionLike) {
        return discussionLikeRepository.deleteDiscussionLike(userIdx, discussion.idx);
    }

    return discussionLikeRepository.addDiscussionLike(userIdx, discussion.idx);
}
