const db = require('../../../models');

exports.createInstance = (obj) => {
    return db.OpinionReply.build(obj);
}

exports.addOpinionReply = async (opinionReply) => {
    return opinionReply.save();
}

exports.getOpinionReplyByIdx = async (opinionReplyIdx) => {
    return db.OpinionReply.findOne({
        where: {
            idx: opinionReplyIdx,
        }
    });
}

exports.deleteOpinionReply = async (opinionReply) => {
    return opinionReply.destroy();
};
