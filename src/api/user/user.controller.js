const { responseSuccessWrapper, processCatchBlock } = require("../../util");
const userService = require("./user.service");
const { HttpStatus } = require("../../error/error.constant");

exports.userRegister = async (req, res) => {
    const body = req.body;

    try {
        await userService.userRegister(body);

        res.status(HttpStatus.CREATED).json();
    } catch (e) {
        processCatchBlock(e, res);
    }
}

exports.userLogin = async (req, res) => {
    const body = req.body;

    try {
        const result = await userService.login(body);

        res.status(HttpStatus.OK).json(responseSuccessWrapper(result));
    } catch (e) {
        processCatchBlock(e, res);
    }
}

exports.getUserInfo = async (req, res) => {
    const user = req.user;

    delete user.encryptedPassword;

    res.status(HttpStatus.OK).json(responseSuccessWrapper({ user }));
}
