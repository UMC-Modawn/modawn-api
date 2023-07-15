module.exports = (sequelize, DataTypes) => {
    return sequelize.define('discussion_like', {
        userIdx: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        discussionIdx: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        createdDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    }, {
        tableName: 'discussion_like',
        timestamps: false,
    });
}
