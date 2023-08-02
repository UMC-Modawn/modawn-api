const { HttpStatus } = require("../../error/error.constant");
const { responseSuccessWrapper } = require("../../util");

exports.imageUpload = async (req, res) => {
    res.status(HttpStatus.CREATED).json(responseSuccessWrapper({ url: req.file.location }));
}
