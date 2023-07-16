const { OpinionType } = require("./opinion.constant");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('opinion', {
        idx: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        discussionIdx: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        userIdx: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        type: {
            type: DataTypes.ENUM,
            values: Object.values(OpinionType),
        },
        assert: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        reason: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        imgUrl: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        createdDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        modifiedDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    }, {
        tableName: 'opinion',
        timestamps: false,
    })
}
