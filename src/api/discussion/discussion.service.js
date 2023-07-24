const discussionRepository = require('./discussion.repository');

exports.getDiscussions = async (query) => {
    return await discussionRepository.getDiscussions(query);
}
