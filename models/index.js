'use strict';

const Sequelize = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(config.MYSQL_DATABASE, config.MYSQL_USER, config.MYSQL_PASSWORD, {
    host: config.MYSQL_HOST,
    dialect: 'mysql',
    logging: false,
});

/**
 * Entities
 */
const User = require('./user/user.entity')(sequelize, Sequelize);
const Discussion = require('./discussion/discussion.entity')(sequelize, Sequelize);
const DiscussionCategory = require('./discussion-category/discussion-category.entity')(sequelize, Sequelize);
const DiscussionLike = require('./discussion-like/discussion-like.entity')(sequelize, Sequelize);
const Opinion = require('./opinion/opinion.entity')(sequelize, Sequelize);
const OpinionReply = require('./opinion-reply/opinion-reply.entity')(sequelize, Sequelize);
const OpinionLike = require('./opinion-like/opinion-like.entity')(sequelize, Sequelize);

DiscussionLike.removeAttribute('id');
OpinionLike.removeAttribute('id');

/**
 * Relations
 */
/** One to Many : Discussion Category - Discussion */
DiscussionCategory.hasMany(Discussion, { foreignKey: 'categoryIdx', sourceKey: 'idx' });

/** One to Many : User - Discussion */
User.hasMany(Discussion, { foreignKey: 'userIdx', sourceKey: 'idx' });

/** Many to Many : User - Discussion Like - Discussion */
User.hasMany(DiscussionLike, { foreignKey: 'userIdx', sourceKey: 'idx' });
Discussion.hasMany(DiscussionLike, { foreignKey: 'discussionIdx', sourceKey: 'idx' });

/** One to Many : Discussion - Opinion */
Discussion.hasMany(Opinion, { foreignKey: 'discussionIdx', sourceKey: 'idx' });

/** One to Many : User - Opinion */
User.hasMany(Opinion, { foreignKey: 'userIdx', sourceKey: 'idx' });

/** Many to Many: User - Opinion Reply - Opinion */
User.hasMany(OpinionReply, { foreignKey: 'userIdx', sourceKey: 'idx' });
Opinion.hasMany(OpinionReply, { foreignKey: 'opinionIdx', sourceKey: 'idx' });

/** Many to Many : User - Opinion Like - Opinion */
User.hasMany(OpinionLike, { foreignKey: 'userIdx', sourceKey: 'idx' });
Opinion.hasMany(OpinionLike, { foreignKey: 'opinionIdx', sourceKey: 'idx' });

module.exports = {
    sequelize,
    Sequelize,
    User,
    Discussion,
    DiscussionCategory,
    DiscussionLike,
    Opinion,
    OpinionReply,
    OpinionLike,
};
