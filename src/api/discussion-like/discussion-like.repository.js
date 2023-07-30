const db = require('../../../models');

exports.getDiscussionLikeCounts = async (discussionIdx) => {
    return db.DiscussionLike.count({
        where: {
            discussionIdx,
        }
    });
}

exports.getDiscussionLike = async (userIdx, discussionIdx) => {
    return db.DiscussionLike.findOne({
        where: {
            userIdx,
            discussionIdx,
        }
    });
}

exports.addDiscussionLike = async (userIdx, discussionIdx) => {
    return db.DiscussionLike.create({
        userIdx,
        discussionIdx,
    });
}

exports.deleteDiscussionLike = async (userIdx, discussionIdx) => {
    return db.DiscussionLike.destroy({
        where: {
            userIdx,
            discussionIdx,
        }
    });
}
