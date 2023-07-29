const discussionCategoryRepository = require('./discussion-category.repository');
const RequestException = require("../../error/request.exception");

exports.getDiscussionCategories = async () => {
    return discussionCategoryRepository.getDiscussionCategories();
}

exports.getDiscussionCategoryByIdx = async (idx) => {
    const category = await discussionCategoryRepository.getDiscussionCategoryByIdx(idx);
    if (!category) {
        throw new RequestException('존재하지 않는 토론 카테고리입니다.', HttpStatus.BAD_REQUEST);
    }
    return category;
}
