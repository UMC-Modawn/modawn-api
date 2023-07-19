const { responseFailedWrapper } = require('../util');
const jwt = require('jsonwebtoken');
const config = require('../../config/config');
const userRepository = require('../api/user/user.repository');
const RequestException = require('../error/request.exception');
const { HttpStatus } = require('../error/error.constant');

exports.userAuthMiddleware = async (req, res, next) => {
    const authorization = req.headers['authorization'];
    if (!authorization) {
        return res.status(400).json(responseFailedWrapper('인증 정보가 존재하지 않습니다.'));
    }

    if (authorization.split(' ').length !== 2) {
        return res.status(400).json(responseFailedWrapper('유효하지 않은 헤더입니다.'));
    }

    const [tokenType, token] = authorization.split(' ');
    if (tokenType !== 'Bearer') {
        return res.status(400).json(responseFailedWrapper('유효하지 않은 토큰 타입입니다.'));
    }

    try {
        const decoded = await jwt.verify(token, config.JWT_SECRET);

        const user = await userRepository.getUser({ email: decoded.email, nickname: decoded.nickname });
        if (!user) {
            throw new RequestException('존재하지 않는 사용자입니다.', HttpStatus.INTERNAL_SERVER_ERROR);
        }

        req.user = user.dataValues;
        next();
    } catch (e) {
        switch (e.name) {
            case 'TokenExpiredError':
                return res.status(401).json(responseFailedWrapper('만료된 토큰입니다.'));
            case 'JsonWebTokenError':
                return res.status(401).json(responseFailedWrapper('유효하지 않은 토큰입니다.'));
            default:
                return res.status(e.status).json(responseFailedWrapper(e.message));
        }

    }
}
