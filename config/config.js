module.exports = {
    // server config
    PORT: process.env.PORT,
    ENV: process.env.ENV,

    // db config
    MYSQL_HOST: process.env.MYSQL_HOST,
    MYSQL_PORT: process.env.MYSQL_PORT,
    MYSQL_USER: process.env.MYSQL_USER,
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
    MYSQL_DATABASE: process.env.MYSQL_DATABASE,

    // jwt config
    JWT_SECRET: process.env.JWT_SECRET,

    AWS_REGION: process.env.AWS_REGION,
    AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,

    AWS_MODAWN_S3_BUCKET_NAME: process.env.AWS_MODAWN_S3_BUCKET_NAME,
};
