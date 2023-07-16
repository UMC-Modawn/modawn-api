const { DiscussionStatus } = require('./discussion.constant');

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('discussion', {
        idx: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        categoryIdx: {
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
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM,
            values: Object.values(DiscussionStatus),
        },
        url: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        imgUrl: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        startDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        endDate: {
            type: DataTypes.DATE,
            allowNull: false,
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
        tableName: 'discussion',
        timestamps: false,
    });
};
