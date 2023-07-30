const express = require('express');
const router = express.Router();

const opinionController = require('./opinion.controller');
const { validatorCheckerMiddleware } = require("../../middleware/validator.middleware");
const { getOpinionsValidator } = require("./opinion.validator");

router.get('/', getOpinionsValidator, validatorCheckerMiddleware, opinionController.getOpinions);

module.exports = router;
