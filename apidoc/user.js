/**
 * @api {post} /user 01. 유저 회원가입
 * @apiDescription 유저 회원가입을 진행합니다.
 * @apiName RegisterUser
 * @apiGroup User
 *
 * @apiBody {string} name 유저 이름
 * @apiBody {string} nickname 유저 닉네임
 * @apiBody {string} email 유저 이메일
 * @apiBody {string} password 유저 비밀번호
 * @apiBody {string} confirmPassword 유저 비밀번호 확인
 *
 * @apiSuccessExample {json} Response (example):
 * HTTP/1.1 201 Created
 */
