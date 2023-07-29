const db = require('../../../models');

exports.getOpinions = async (query) => {
    const where = {};
    if (query.type) {
        where.type = query.type;
    }
    if (query.discussionIdx) {
        where.discussionIdx = query.discussionIdx;
    }

    return db.Opinion.findAndCountAll({
        include: [
            { model: db.OpinionLike }
        ],
        where,
        // order: [[db.Sequelize.fn('COUNT', db.Sequelize.col('opinion_likes.userIdx')), 'DESC']],
    });
}

exports.getOpinionsCountByDiscussionIdx = async (discussionIdx) => {
    return db.Opinion.count({
        where: { discussionIdx },
    });
}
