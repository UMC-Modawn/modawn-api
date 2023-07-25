const discussionRepository = require('./discussion.repository');

exports.getDiscussions = async (query) => {
    const { count, rows } = await discussionRepository.getDiscussions(query);
    return {
        count,
        rows: rows.map(({ dataValues }) => {
            if (dataValues.discussion_likes[0].userIdx === null) {
                return {
                    ...dataValues,
                    discussion_likes: 0,
                }
            }
            return {
                ...dataValues,
                discussion_likes: dataValues.discussion_likes.length,
            }
        })
    };
}
