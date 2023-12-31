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
 * @apiDefine NotMatchLoginInfo
 * @apiError NotMatchLoginInfo 아이디 또는 비밀번호가 일치하지 않습니다.
 * @apiErrorExample {json} NotMatchLoginInfo
 * HTTP/1.1 400 Bad Request
 * {
 *     "success": false,
 *     "message": "아이디 또는 비밀번호가 일치하지 않습니다."
 * }
 */

/**
 * @apiDefine NotExistDiscussion
 *
 * @apiError NotExistDiscussion 존재하지 않는 토론입니다.
 *
 * @apiErrorExample {json} NotExistDiscussion
 * HTTP/1.1 400 Bad Request
 * {
 *     "success": false,
 *     "message": "존재하지 않는 토론입니다."
 * }
 */

/**
 * @apiDefine NotExistDiscussionCategory
 *
 * @apiError NotExistDiscussionCategory 존재하지 않는 토론 카테고리입니다.
 *
 * @apiErrorExample {json} NotExistDiscussionCategory
 * HTTP/1.1 400 Bad Request
 * {
 *     "success": false,
 *     "message": "존재하지 않는 토론 카테고리입니다."
 * }
 */

/**
 * @apiDefine CannotDelete
 *
 * @apiError CannotDelete 삭제 권한이 없습니다.
 *
 * @apiErrorExample {json} CannotDelete
 * HTTP/1.1 403 Forbidden
 * {
 *     "success": false,
 *     "message": "삭제 권한이 없습니다."
 * }
 */

/**
 * @apiDefine CannotUpdate
 *
 * @apiError CannotUpdate 수정 권한이 없습니다.
 *
 * @apiErrorExample {json} CannotUpdate
 * HTTP/1.1 403 Forbidden
 * {
 *     "success": false,
 *     "message": "수정 권한이 없습니다."
 * }
 */

/**
 * @apiDefine NotExistOpinion
 *
 * @apiError NotExistOpinion 존재하지 않는 의견입니다.
 *
 * @apiErrorExample {json} NotExistOpinion
 * HTTP/1.1 400 Bad Request
 * {
 *     "success": false,
 *     "message": "존재하지 않는 의견입니다."
 * }
 */

/**
 * @apiDefine NotExistOpinionType
 *
 * @apiError NotExistOpinionType 존재하지 않는 의견 타입입니다.
 *
 * @apiErrorExample {json} NotExistOpinionType
 * HTTP/1.1 400 Bad Request
 * {
 *     "success": false,
 *     "message": "존재하지 않는 의견 타입입니다."
 * }
 */

/**
 * @apiDefine NotExistOpinionReply
 *
 * @apiError NotExistOpinionReply 존재하지 않는 댓글입니다.
 *
 * @apiErrorExample {json} NotExistOpinionReply
 * HTTP/1.1 400 Bad Request
 * {
 *     "success": false,
 *     "message": "존재하지 않는 댓글입니다."
 * }
 */
