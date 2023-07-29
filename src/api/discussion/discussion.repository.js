const db = require('../../../models');

exports.createInstance = (body) => {
    return db.Discussion.build(body);
}

exports.getDiscussions = async (query) => {
    /** where clause */
    const where = {};
    if (query.searchTerm) {
        where.title = {
            [db.Sequelize.Op.like]: `%${query.searchTerm}%`,
        };
    }

    /** pagination */
    const pagination = {};
    if (query.offset) {
        pagination.offset = parseInt(query.offset);
    }
    if (query.limit) {
        pagination.limit = parseInt(query.limit);
    }

    /** include (join) clause */
    const discussionCategoryJoinWhere = {};
    if (query.category) {
        discussionCategoryJoinWhere.type = query.category;
    }

    return await db.Discussion.findAndCountAll({
        include: [
            {
                model: db.DiscussionCategory,
                where: discussionCategoryJoinWhere,
            },
            { model: db.User },
            { model: db.DiscussionLike },
        ],
        where,
        ...pagination,
        order: [
            ['createdDate', 'DESC']
        ]
    });
}

exports.getDiscussion = (discussionIdx) => {
    return db.Discussion.findOne({
        include: [
            { model: db.DiscussionCategory },
            { model: db.User },
        ],
        where: { idx: discussionIdx },
    })
}

exports.addDiscussion = async (discussion) => {
    return db.Discussion.create(discussion);
}

exports.deleteDiscussion = async (discussion) => {
    return discussion.destroy();
}

exports.updateDiscussion = async (discussion) => {
    return discussion.save();
}
