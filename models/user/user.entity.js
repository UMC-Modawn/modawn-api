module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        idx: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        nickname: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        encryptedPassword: {
            type: DataTypes.STRING(256), // SHA256
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
        }
    }, {
        tableName: 'user',
        timestamps: false,
    });
}
