/**
 * @api {post} /user/register 01. 유저 회원가입
 * @apiDescription 유저 회원가입을 진행합니다.
 * @apiName RegisterUser
 * @apiGroup User
 * @apiPermission none
 *
 * @apiBody {string} name 유저 이름
 * @apiBody {string} nickname 유저 닉네임
 * @apiBody {string} email 유저 이메일
 * @apiBody {string} password 유저 비밀번호
 * @apiBody {string} confirmPassword 유저 비밀번호 확인
 *
 * @apiSuccessExample {json} Response (example):
 * HTTP/1.1 201 Created
 *
 * @apiUse NotCorrectPassword
 * @apiUse CannotUseNickname
 * @apiUse DuplicateUser
 */

/**
 * @api {get} /user/login 02. 유저 로그인
 * @apiDescription 유저 로그인을 진행합니다.
 * @apiName LoginUser
 * @apiGroup User
 * @apiPermission none
 *
 * @apiBody {string} email 유저 이메일
 * @apiBody {string} password 유저 비밀번호
 *
 * @apiSuccess {boolean} success api 요천 성공 여부
 * @apiSuccess {object} data api 요청 데이터
 * @apiSuccess {string} data.token 유저 토큰
 *
 * @apiSuccessExample {json} Response (example):
 * HTTP/1.1 200 OK
 * {
 *     "success": true,
 *     "data": {
 *         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *     }
 * }
 *
 * @apiUse NotMatchLoginInfo
 */
