module.exports = (sequelize, DataTypes) => {
    return sequelize.define('opinion_like', {
        userIdx: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        opinionIdx: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        createdDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    }, {
        tableName: 'opinion_like',
        timestamps: false,
    });
}
