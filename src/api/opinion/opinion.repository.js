const db = require('../../../models');

exports.getOpinions = async (query) => {
    const where = {};
    if (query.type) {
        where.type = query.type;
    }
    if (query.discussionIdx) {
        where.discussionIdx = query.discussionIdx;
    }

    /** pagination */
    const pagination = {};
    if (query.offset) {
        pagination.offset = parseInt(query.offset);
    }
    if (query.limit) {
        pagination.limit = parseInt(query.limit);
    }

    return db.Opinion.findAndCountAll({
        include: [
            { model: db.OpinionLike }
        ],
        where,
        ...pagination,
    });
}

exports.getOpinionsOrderByLikeCount = async (discussionIdx, type) => {
    return db.sequelize.query(
        `select
            o.idx,
            o.title,
            COUNT(ol.userIdx) as likeCount
        from opinion o
        left join opinion_like ol on o.idx = ol.opinionIdx
        where
            type = '${type}'
            and discussionIdx = ${discussionIdx}
        group by o.idx
        order by COUNT(ol.userIdx) DESC
        limit 3`
    );
}

exports.getOpinionsCountByDiscussionIdx = async (discussionIdx) => {
    return db.Opinion.count({
        where: { discussionIdx },
    });
}
