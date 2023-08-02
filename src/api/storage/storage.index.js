const express = require('express');
const router = express.Router();

const storageController = require('./storage.controller');
const { upload } = require("./storage.middleware");
const { userAuthMiddleware } = require("../../middleware/user-auth.middleware");

router.post('/', userAuthMiddleware, upload.single('file'), storageController.imageUpload);

module.exports = router;
