const db = require('../../../models');

exports.getDiscussionCategories = async () => {
    return db.DiscussionCategory.findAll();
}

exports.getDiscussionCategoryByIdx = async (idx) => {
    return db.DiscussionCategory.findOne({
        where: { idx },
    });
}
