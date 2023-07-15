module.exports = (sequelize, DataTypes) => {
    return sequelize.define('discussion_category', {
        idx: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        type: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
        },
    }, {
        tableName: 'discussion_category',
        timestamps: false,
    });
}
