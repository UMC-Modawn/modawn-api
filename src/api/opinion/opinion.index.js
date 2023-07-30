const express = require('express');
const router = express.Router();

const opinionController = require('./opinion.controller');
const { validatorCheckerMiddleware } = require("../../middleware/validator.middleware");
const { getOpinionsValidator, getOpinionIdxValidator, modifyOpinionValidator, addOpinionValidator } = require("./opinion.validator");
const { addOpinionReplyValidator, deleteOpinionReplyValidator} = require("../opinion-reply/opinion-reply.validator");

router.get('/', getOpinionsValidator, validatorCheckerMiddleware, opinionController.getOpinions);
router.post('/', addOpinionValidator, validatorCheckerMiddleware, opinionController.addOpinion);
router.get('/:opinionIdx', getOpinionIdxValidator, validatorCheckerMiddleware, opinionController.getOpinionByIdx);
router.put('/:opinionIdx', modifyOpinionValidator, validatorCheckerMiddleware, opinionController.modifyOpinion);
router.delete('/:opinionIdx', getOpinionIdxValidator, validatorCheckerMiddleware, opinionController.deleteOpinion);
router.post('/:opinionIdx/like', getOpinionIdxValidator, validatorCheckerMiddleware, opinionController.addOpinionLike);
router.post('/:opinionIdx/reply', addOpinionReplyValidator, validatorCheckerMiddleware, opinionController.addOpinionReply);
router.delete('/:opinionIdx/reply/:opinionReplyIdx', deleteOpinionReplyValidator, validatorCheckerMiddleware, opinionController.deleteOpinionReply);

module.exports = router;
