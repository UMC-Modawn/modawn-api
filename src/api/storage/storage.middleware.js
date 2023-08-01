const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
const path = require('path');
const { randomUUID } = require('crypto');
const config = require('../../../config/config');

AWS.config.update({
    accessKeyId: config.AWS_ACCESS_KEY,
    secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
    region: config.AWS_REGION,
});

const s3 = new AWS.S3();

exports.upload = multer({
    storage: multerS3({
        s3,
        bucket: config.AWS_MODAWN_S3_BUCKET_NAME,
        acl: 'public-read-write',
        key: (req, file, cb) => {
            const extension = path.extname(file.originalname);
            cb(null, `test/${randomUUID({ disableEntropyCache: false })}.${extension}`);
        }
    }),
});
