const express = require('express');
const router = express.Router();

const opinionController = require('./opinion.controller');
const { validatorCheckerMiddleware } = require("../../middleware/validator.middleware");
const { getOpinionsValidator, getOpinionIdxValidator} = require("./opinion.validator");

router.get('/', getOpinionsValidator, validatorCheckerMiddleware, opinionController.getOpinions);
router.get('/:opinionIdx', getOpinionIdxValidator, validatorCheckerMiddleware, opinionController.getOpinionByIdx);
router.post('/:opinionIdx/like', getOpinionIdxValidator, validatorCheckerMiddleware, opinionController.addOpinionLike);

module.exports = router;
