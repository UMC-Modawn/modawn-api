const db = require('../../../models');

exports.createUser = async (user) => {
    await db.User.create(user);
}

exports.getUser = async (user) => {
    return await db.User.findOne({
        where: user,
    });
}
