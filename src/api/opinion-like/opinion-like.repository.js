const db = require('../../../models');

exports.getOpinionLikeCount = async (opinionIdx) => {
    return db.OpinionLike.count({
        where: { opinionIdx },
    });
}

exports.getOpinionLike = async (userIdx, opinionIdx) => {
    return db.OpinionLike.findOne({
        where: {
            userIdx,
            opinionIdx,
        }
    });
}

exports.addOpinionLike = async (userIdx, opinionIdx) => {
    return db.OpinionLike.create({
        userIdx,
        opinionIdx,
    });
}

exports.deleteOpinionLike = async (userIdx, opinionIdx) => {
    return db.OpinionLike.destroy({
        where: {
            userIdx,
            opinionIdx,
        }
    });
}
