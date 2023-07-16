const { responseSuccessWrapper, responseFailedWrapper } = require("../../util");
const userService = require("./user.service");

exports.userRegister = async (req, res) => {
    const body = req.body;

    try {
        await userService.userRegister(body);

        res.status(201).json();
    } catch (e) {
        res.status(e.status).json(responseFailedWrapper(e.message));
    }
}

exports.userLogin = async (req, res) => {
    const body = req.body;

    try {
        const result = await userService.login(body);

        res.status(200).json(responseSuccessWrapper(result));
    } catch (e) {
        res.status(e.status).json(responseFailedWrapper(e.message));
    }
}
