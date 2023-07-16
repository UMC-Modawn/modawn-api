/**
 * @apiDefine NotCorrectPassword
 * @apiError NotCorrectPassword 비밀번호가 일치하지 않습니다.
 * @apiErrorExample {json} NotCorrectPassword
 * HTTP/1.1 400 Bad Request
 * {
 *     "success": false,
 *     "message": "비밀번호가 일치하지 않습니다."
 * }
 */

/**
 * @apiDefine CannotUseNickname
 * @apiError CannotUseNickname 사용할 수 없는 닉네임입니다.
 * @apiErrorExample {json} CannotUseNickname
 * HTTP/1.1 400 Bad Request
 * {
 *     "success": false,
 *     "message": "사용할 수 없는 닉네임입니다. 다른 닉네임을 입력해주세요."
 * }
 */

/**
 * @apiDefine DuplicateUser
 * @apiError DuplicateUser 이미 가입된 아이디입니다.
 * @apiErrorExample {json} DuplicateUser
 * HTTP/1.1 400 Bad Request
 * {
 *     "success": false,
 *     "message": "이미 가입된 아이디입니다. 다른 아이디를 입력해주세요."
 * }
 */

/**
 * @apiDefine NotFoundUserForLogin
 * @apiError NotFoundUserForLogin 아이디 또는 비밀번호가 일치하지 않습니다.
 * @apiErrorExample {json} NotFoundUserForLogin
 * HTTP/1.1 400 Bad Request
 * {
 *     "success": false,
 *     "message": "아이디 또는 비밀번호가 일치하지 않습니다."
 * }
 */
