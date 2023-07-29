const { HttpStatus } = require("./error/error.constant");

exports.responseSuccessWrapper = (data) => {
    return {
        success: true,
        data
    };
}

exports.responseFailedWrapper = (message) => {
    return {
        success: false,
        message
    };
}

exports.processCatchBlock = (e, res) => {
    console.error(e);
    if (!e.status) {
        return res.status(e.status).json(this.responseFailedWrapper(e.message));
    }
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(this.responseFailedWrapper(e.message));
}
