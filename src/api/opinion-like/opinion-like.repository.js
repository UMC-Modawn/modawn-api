const db = require('../../../models');

exports.getOpinionLikeCount = async (opinionIdx) => {
    return db.OpinionLike.count({
        where: { opinionIdx },
    });
}
