const { responseSuccessWrapper, responseFailedWrapper} = require("../../util");
const { userRegister } = require("./user.service");

exports.userRegister = async (req, res) => {
    const body = req.body;

    try {
        await userRegister(body);

        res.status(201).json();
    } catch (e) {
        res.status(400).json(responseFailedWrapper(e.message));
    }
}
