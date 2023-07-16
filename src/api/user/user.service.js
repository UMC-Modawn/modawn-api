const userRepository = require('./user.repository');
const RequestException = require("../../error/request.exception");
const { HttpStatus } = require("../../error/error.constant");
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const config = require('../../../config/config');

exports.userRegister = async (body) => {
    const newUser = {
        email: body.email,
        name: body.name,
        nickname: body.nickname,
        encryptedPassword: crypto.createHash('sha256').update(body.password).digest('hex'),
    }

    if (body.password !== body.confirmPassword) {
        throw new RequestException('비밀번호가 일치하지 않습니다.', HttpStatus.BAD_REQUEST);
    }

    const nicknameDuplicateUser = await userRepository.getUser({ nickname: newUser.nickname });
    if (nicknameDuplicateUser) {
        throw new RequestException('사용할 수 없는 닉네임입니다. 다른 닉네임을 입력해주세요.', HttpStatus.BAD_REQUEST);
    }

    const emailDuplicateUser = await userRepository.getUser({ email: newUser.email });
    if (emailDuplicateUser) {
        throw new RequestException('이미 가입된 아이디입니다. 다른 아이디를 입력해주세요.', HttpStatus.BAD_REQUEST);
    }

    await userRepository.createUser(newUser);
}

exports.login = async (body) => {
    const user = await userRepository.getUser({
        email: body.email,
        encryptedPassword: crypto.createHash('sha256').update(body.password).digest('hex')
    });

    if (!user) {
        throw new RequestException('아이디 또는 비밀번호가 일치하지 않습니다.', HttpStatus.BAD_REQUEST);
    }

    return {
        token: jwt.sign({ email: user.email, nickname: user.nickname }, config.JWT_SECRET, { expiresIn: '1d' })
    };
}
