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
