const express = require('express');
const router = express.Router();

const storageController = require('./storage.controller');
const { upload } = require("./storage.middleware");

router.post('/', upload.single('file'), storageController.imageUpload);

module.exports = router;
