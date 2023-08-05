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
 * @api {post} /user/login 02. 유저 로그인
 * @apiDescription 유저 로그인을 진행합니다.
 * @apiName LoginUser
 * @apiGroup User
 * @apiPermission none
 *
 * @apiBody {string} email 유저 이메일
 * @apiBody {string} password 유저 비밀번호
 *
 * @apiSuccess {boolean} success api 요청 성공 여부
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

/**
 * @api {GET} /user 03. 유저 정보 조회
 * @apiDescription 유저 정보를 조회합니다.
 * @apiName GetUserInfo
 * @apiGroup User
 * @apiPermission USER_TOKEN
 *
 * @apiSuccess {Boolean} success api 요청 성공 여부
 * @apiSuccess {Object} data api 요청 데이터
 * @apiSuccess {Object} data.user 유저 정보
 * @apiSuccess {Number} data.user.idx 유저 idx
 * @apiSuccess {String} data.user.email 유저 이메일
 * @apiSuccess {String} data.user.name 유저 이름
 * @apiSuccess {String} data.user.nickname 유저 닉네임
 * @apiSuccess {Date} data.user.createdDate 유저 생성일
 * @apiSuccess {Date} data.user.modifiedDate 유저 수정일
 *
 * @apiSuccessExample {json} Response (example):
 * HTTP/1.1 200 OK
 * {
 *     "success": true,
 *     "data": {
 *         "user": {
 *             "idx": 2,
 *             "email": "jiho5993@gmail.com",
 *             "name": "박지호1",
 *             "nickname": "호지1",
 *             "createdDate": "2023-07-29T07:11:40.000Z",
 *             "modifiedDate": "2023-07-29T07:11:40.000Z"
 *         }
 *     }
 * }
 */
