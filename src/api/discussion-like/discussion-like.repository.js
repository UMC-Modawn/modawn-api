const db = require('../../../models');

exports.getDiscussionLikeCounts = async (discussionIdx) => {
    return db.DiscussionLike.count({
        where: {
            discussionIdx,
        }
    });
}
