const discussionRepository = require('./discussion.repository');
const { HttpStatus } = require("../../error/error.constant");
const RequestException = require("../../error/request.exception");
const opinionService = require('../opinion/opinion.service');
const discussionLikeService = require('../discussion-like/discussion-like.service');
const { OpinionType } = require("../../../models/opinion/opinion.constant");
const { DiscussionStatus } = require("../../../models/discussion/discussion.constant");
const discussionCategoryService = require('../discussion-category/discussion-category.service');

exports.getDiscussions = async (query) => {
    const { count, rows } = await discussionRepository.getDiscussions(query);
    const discussionLikeCounts = await Promise.all(rows.map(({ dataValues }) => discussionLikeService.getDiscussionLikeCounts(dataValues.idx)));

    return {
        count,
        rows: rows.map(({ dataValues }, idx) => {
            return {
                ...dataValues,
                discussionLikeCount: discussionLikeCounts[idx],
            }
        })
    };
}

exports.getDiscussionByIdx = async (user, idx) => {
    const discussion = await discussionRepository.getDiscussion(idx);
    if (!discussion) {
        throw new RequestException('존재하지 않는 토론입니다.', HttpStatus.BAD_REQUEST);
    }

    const userDiscussionLike = await discussionLikeService.isUserDiscussionLike(user.idx, idx);
    const discussionLikeCount = await discussionLikeService.getDiscussionLikeCounts(idx);

    const opinionApproves = await opinionService.getOpinionsOrderByLikeCount(idx, OpinionType.APPROVE);
    const opinionDisapproves = await opinionService.getOpinionsOrderByLikeCount(idx, OpinionType.DISAPPROVE);
    const opinionOthers = await opinionService.getOpinionsOrderByLikeCount(idx, OpinionType.OTHER);

    return {
        discussion: {
            ...discussion.dataValues,
            opinionApproves,
            opinionDisapproves,
            opinionOthers,
        },
        userDiscussionLike,
        discussionLikeCount,
    };
}

exports.getExistDiscussionByIdx = async (idx) => {
    const discussion = await discussionRepository.getDiscussion(idx);
    if (!discussion) {
        throw new RequestException('존재하지 않는 토론입니다.', HttpStatus.BAD_REQUEST);
    }

    return discussion;
}

exports.addDiscussion = async (user, body) => {
    const category = await discussionCategoryService.getDiscussionCategoryByIdx(body.categoryIdx);

    const discussion = discussionRepository.createInstance({
        userIdx: user.idx,
        title: body.title,
        content: body.content,
        categoryIdx: category.idx,
        status: DiscussionStatus.DISCUSS,
        url: body.url,
        imgUrl: body.imgUrl,
        startDate: new Date().toISOString(),
        endDate: body.endDate,
    });

    await discussion.save();

    return discussion;
}

exports.deleteDiscussion = async (user, discussionIdx) => {
    const discussion = await this.getExistDiscussionByIdx(discussionIdx);

    if (discussion.userIdx !== user.idx) {
        throw new RequestException('삭제 권한이 없습니다.', HttpStatus.FORBIDDEN);
    }

    return discussionRepository.deleteDiscussion(discussion);
}

exports.updateDiscussionStatus = async (user, discussionIdx, status) => {
    const discussion = await this.getExistDiscussionByIdx(discussionIdx);

    if (discussion.userIdx !== user.idx) {
        throw new RequestException('수정 권한이 없습니다.', HttpStatus.FORBIDDEN);
    }

    if (!Object.keys(DiscussionStatus).includes(status)) {
        throw new RequestException('존재하지 않는 상태입니다.', HttpStatus.BAD_REQUEST);
    }

    discussion.status = status;

    return discussionRepository.updateDiscussion(discussion);
}
