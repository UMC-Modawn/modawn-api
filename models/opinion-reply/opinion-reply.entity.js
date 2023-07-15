const { OpinionType } = require('../opinion/opinion.constant');

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('opinion_reply', {
        idx: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        opinionIdx: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        userIdx: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        opinionType: {
            type: DataTypes.ENUM,
            values: Object.values(OpinionType),
        },
        createdDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        modifiedDate: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    }, {
        tableName: 'opinion_reply',
        timestamps: false,
    });
}
