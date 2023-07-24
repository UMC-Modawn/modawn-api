const db = require('../../../models');

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
        ],
        where,
        ...pagination,
    });
}
