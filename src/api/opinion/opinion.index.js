const express = require('express');
const router = express.Router();

const opinionController = require('./opinion.controller');
const { validatorCheckerMiddleware } = require("../../middleware/validator.middleware");
const { getOpinionsValidator, getOpinionIdxValidator, modifyOpinionValidator, addOpinionValidator } = require("./opinion.validator");

router.get('/', getOpinionsValidator, validatorCheckerMiddleware, opinionController.getOpinions);
router.post('/', addOpinionValidator, validatorCheckerMiddleware, opinionController.addOpinion);
router.get('/:opinionIdx', getOpinionIdxValidator, validatorCheckerMiddleware, opinionController.getOpinionByIdx);
router.put('/:opinionIdx', modifyOpinionValidator, validatorCheckerMiddleware, opinionController.modifyOpinion);
router.post('/:opinionIdx/like', getOpinionIdxValidator, validatorCheckerMiddleware, opinionController.addOpinionLike);

module.exports = router;
