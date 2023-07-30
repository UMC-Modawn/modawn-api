/**
 * @api {get} /discussion/:discussionIdx/opinion 01. 토론 의견 목록 조회
 * @apiDescription 토론 의견 목록을 조회합니다.
 * @apiName GetOpinionList
 * @apiGroup Opinion
 * @apiPermission USER_TOKEN
 *
 * @apiHeader {String} Authorization user 토큰</br>ex) Bearer USER_TOKEN
 *
 * @apiParam {Number} discussionIdx 토론 idx
 *
 * @apiQuery {String=APPROVE,DISAPPROVE,OTHER} [type] 의견 타입</br>APPROVE: 찬성</br>DISAPPROVE: 반대</br>OTHER: 제3의견
 * @apiQuery {Number} [offset] 토론 의견 목록 조회 시작점
 * @apiQuery {Number} [limit] 토론 의견 목록 조회 갯수
 *
 * @apiSuccess {Boolean} success api 요청 성공 여부
 * @apiSuccess {Object} data api 요청 데이터
 * @apiSuccess {Number} data.count 의견 목록 총 갯수
 * @apiSuccess {Object[]} data.rows 의견 목록
 * @apiSuccess {Number} data.rows.idx 의견 idx
 * @apiSuccess {Number} data.rows.discussionIdx 토론 idx
 * @apiSuccess {Number} data.rows.userIdx 작성자 idx
 * @apiSuccess {String} data.rows.title 의견 제목
 * @apiSuccess {String=APPROVE,DISAPPROVE,OTHER} data.rows.type 의견 타입</br>APPROVE: 찬성</br>DISAPPROVE: 반대</br>OTHER: 제3의견
 * @apiSuccess {String} data.rows.assert 의견 주장
 * @apiSuccess {String} data.rows.reason 의견 근거
 * @apiSuccess {String} data.rows.content 의견 내용
 * @apiSuccess {String} data.rows.url 의견 참고 링크
 * @apiSuccess {String} data.rows.imgUrl 의견 이미지 URL
 * @apiSuccess {Date} data.rows.createdDate 의견 작성일
 * @apiSuccess {Date} data.rows.modifiedDate 의견 수정일
 * @apiSuccess {Object} data.rows.user 작성자 정보
 * @apiSuccess {Number} data.rows.opinionLikeCount 의견 좋아요 수
 *
 * @apiSuccessExample {json} Response (example):
 * HTTP/1.1 200 OK
 * {
 *     "success": true,
 *     "data": {
 *         "count": 5,
 *         "rows": [
 *             {
 *                 "idx": 8,
 *                 "discussionIdx": 4,
 *                 "userIdx": 2,
 *                 "title": "t8",
 *                 "type": "APPROVE",
 *                 "assert": "a8",
 *                 "reason": "r8",
 *                 "content": "c8",
 *                 "url": null,
 *                 "imgUrl": null,
 *                 "createdDate": "2023-07-29T16:27:58.000Z",
 *                 "modifiedDate": "2023-07-29T16:27:58.000Z",
 *                 "user": {
 *                     "idx": 2,
 *                     "email": "jiho5993@gmail.com",
 *                     "name": "박지호1",
 *                     "nickname": "호지1",
 *                     "createdDate": "2023-07-29T07:11:40.000Z",
 *                     "modifiedDate": "2023-07-29T07:11:40.000Z"
 *                 },
 *                 "opinionLikeCount": 2
 *             },
 *             ...
 *         ]
 *     }
 * }
 */

/**
 * @api {get} /discussion/:discussionIdx/opinion/:opinionIdx 02. 토론 의견 상세 조회
 * @apiDescription 토론 의견을 상세하게 조회합니다.
 * @apiName GetOpinionDetail
 * @apiGroup Opinion
 * @apiPermission USER_TOKEN
 *
 * @apiHeader {String} Authorization user 토큰</br>ex) Bearer USER_TOKEN
 *
 * @apiParam {Number} discussionIdx 토론 idx
 * @apiParam {Number} opinionIdx 의견 idx
 *
 * @apiSuccess {Boolean} success api 요청 성공 여부
 * @apiSuccess {Object} data api 요청 데이터
 * @apiSuccess {Number} data.idx 의견 idx
 * @apiSuccess {Number} data.discussionIdx 토론 idx
 * @apiSuccess {Number} data.userIdx 작성자 idx
 * @apiSuccess {String} data.title 의견 제목
 * @apiSuccess {String=APPROVE,DISAPPROVE,OTHER} data.type 의견 타입</br>APPROVE: 찬성</br>DISAPPROVE: 반대</br>OTHER: 제3의견
 * @apiSuccess {String} data.assert 의견 주장
 * @apiSuccess {String} data.reason 의견 근거
 * @apiSuccess {String} data.content 의견 내용
 * @apiSuccess {String} data.url 의견 참고 링크
 * @apiSuccess {String} data.imgUrl 의견 이미지 URL
 * @apiSuccess {Date} data.createdDate 의견 작성일
 * @apiSuccess {Date} data.modifiedDate 의견 수정일
 * @apiSuccess {Object} data.user 작성자 정보
 * @apiSuccess {Object} data.discussion 토론 정보
 * @apiSuccess {Object[]} data.opinion_replies 댓글 목록
 * @apiSuccess {Number} data.opinion_replies.idx 댓글 idx
 * @apiSuccess {Number} data.opinion_replies.opinionIdx 의견 idx
 * @apiSuccess {Number} data.opinion_replies.userIdx 작성자 idx
 * @apiSuccess {String} data.opinion_replies.content 댓글 내용
 * @apiSuccess {String=APPROVE,DISAPPROVE,OTHER} data.opinion_replies.opinionType 댓글 타입</br>APPROVE: 찬성</br>DISAPPROVE: 반대</br>OTHER: 제3의견
 * @apiSuccess {Date} data.opinion_replies.createdDate 댓글 작성일
 * @apiSuccess {Date} data.opinion_replies.modifiedDate 댓글 수정일
 * @apiSuccess {Object} data.opinion_replies.user 댓글 작성자 정보
 * @apiSuccess {Number} data.opinionLikeCount 의견 좋아요 수
 *
 * @apiSuccessExample {json} Response (example):
 * HTTP/1.1 200 OK
 * {
 *     "success": true,
 *     "data": {
 *         "idx": 8,
 *         "discussionIdx": 4,
 *         "userIdx": 2,
 *         "title": "t8",
 *         "type": "APPROVE",
 *         "assert": "a8",
 *         "reason": "r8",
 *         "content": "c8",
 *         "url": null,
 *         "imgUrl": null,
 *         "createdDate": "2023-07-29T16:27:58.000Z",
 *         "modifiedDate": "2023-07-29T16:27:58.000Z",
 *         "user": {
 *             "idx": 2,
 *             "email": "jiho5993@gmail.com",
 *             "name": "박지호1",
 *             "nickname": "호지1",
 *             "createdDate": "2023-07-29T07:11:40.000Z",
 *             "modifiedDate": "2023-07-29T07:11:40.000Z"
 *         },
 *         "discussion": {
 *             "idx": 4,
 *             "categoryIdx": 3,
 *             "userIdx": 1,
 *             "title": "t4",
 *             "content": "c4",
 *             "status": "DISCUSS",
 *             "url": null,
 *             "imgUrl": null,
 *             "startDate": "2023-07-28T00:01:47.000Z",
 *             "endDate": "2023-07-28T00:01:47.000Z",
 *             "createdDate": "2023-07-28T00:01:47.000Z",
 *             "modifiedDate": "2023-07-28T00:01:47.000Z"
 *         },
 *         "opinion_replies": [
 *             {
 *                 "idx": 5,
 *                 "opinionIdx": 8,
 *                 "userIdx": 1,
 *                 "content": "c5",
 *                 "opinionType": "DISAPPROVE",
 *                 "createdDate": "2023-07-30T17:39:22.000Z",
 *                 "modifiedDate": "2023-07-30T17:39:22.000Z",
 *                 "user": {
 *                     "idx": 1,
 *                     "email": "jiho59937@gmail.com",
 *                     "name": "박지호",
 *                     "nickname": "호지",
 *                     "createdDate": "2023-07-27T14:58:04.000Z",
 *                     "modifiedDate": "2023-07-27T14:58:04.000Z"
 *                 }
 *             },
 *             ...
 *         ],
 *         "opinionLikeCount": 2
 *     }
 * }
 *
 * @apiUse NotExistDiscussion
 * @apiUse NotExistOpinion
 */

/**
 * @api {post} /discussion/:discussionIdx/opinion/:opinionIdx/like 03. 의견 좋아요 등록/취소
 * @apiDescription 의견 좋아요 등록/취소</br>좋아요를 누르지 않은 상태에서 api 요청시, 좋아요 등록</br>좋아요를 누른 상태에서 api 요청시, 좋아요 취소
 * @apiName addOpinionLike
 * @apiGroup Opinion
 * @apiPermission USER_TOKEN
 *
 * @apiHeader {String} Authorization user 토큰</br>ex) Bearer USER_TOKEN
 *
 * @apiParam {Number} discussionIdx 토론 idx
 * @apiParam {Number} opinionIdx 의견 idx
 *
 * @apiSuccess {Boolean} success api 요청 성공 여부
 *
 * @apiSuccessExample {json} Response (example):
 * HTTP/1.1 201 Created
 * {
 *     "success": true
 * }
 *
 * @apiUse NotExistDiscussion
 * @apiUse NotExistOpinion
 */

/**
 * @api {post} /discussion/:discussionIdx/opinion 04. 의견 등록
 * @apiDescription 의견 등록
 * @apiName addOpinion
 * @apiGroup Opinion
 * @apiPermission USER_TOKEN
 *
 * @apiHeader {String} Authorization user 토큰</br>ex) Bearer USER_TOKEN
 *
 * @apiParam {Number} discussionIdx 토론 idx
 *
 * @apiBody {String} title 의견 제목
 * @apiBody {String=APPROVE,DISAPPROVE,OTHER} type 의견 타입</br>APPROVE: 찬성</br>DISAPPROVE: 반대</br>OTHER: 제3의견
 * @apiBody {String} assert 의견 주장
 * @apiBody {String} reason 의견 근거
 * @apiBody {String} content 의견 내용
 * @apiBody {String} [url] 의견 참고 링크
 * @apiBody {String} [imgUrl] 의견 이미지 url
 *
 * @apiSuccess {Boolean} success api 요청 성공 여부
 *
 * @apiSuccessExample {json} Response (example):
 * HTTP/1.1 201 Created
 * {
 *     "success": true
 * }
 *
 * @apiUse NotExistDiscussion
 * @apiUse NotExistOpinionType
 */

/**
 * @api {put} discussion/:discussionIdx/opinion/:opinionIdx 05. 의견 수정
 * @apiDescription 의견 수정
 * @apiName modifyOpinion
 * @apiGroup Opinion
 * @apiPermission USER_TOKEN
 *
 * @apiHeader {String} Authorization user 토큰</br>ex) Bearer USER_TOKEN
 *
 * @apiParam {Number} discussionIdx 토론 idx
 * @apiParam {Number} opinionIdx 의견 idx
 *
 * @apiBody {String} title 의견 제목
 * @apiBody {String=APPROVE,DISAPPROVE,OTHER} type 의견 타입</br>APPROVE: 찬성</br>DISAPPROVE: 반대</br>OTHER: 제3의견
 * @apiBody {String} assert 의견 주장
 * @apiBody {String} reason 의견 근거
 * @apiBody {String} content 의견 내용
 * @apiBody {String} [url] 의견 참고 링크
 * @apiBody {String} [imgUrl] 의견 이미지 url
 *
 * @apiSuccess {Boolean} success api 요청 성공 여부
 *
 * @apiSuccessExample {json} Response (example):
 * HTTP/1.1 200 OK
 * {
 *     "success": true
 * }
 *
 * @apiUse NotExistDiscussion
 * @apiUse NotExistOpinionType
 * @apiUse CannotUpdate
 */

/**
 * @api {delete} discussion/:discussionIdx/opinion/:opinionIdx 06. 의견 삭제
 * @apiDescription 의견 삭제
 * @apiName deleteOpinion
 * @apiGroup Opinion
 * @apiPermission USER_TOKEN
 *
 * @apiHeader {String} Authorization user 토큰</br>ex) Bearer USER_TOKEN
 *
 * @apiParam {Number} discussionIdx 토론 idx
 * @apiParam {Number} opinionIdx 의견 idx
 *
 * @apiSuccess {Boolean} success api 요청 성공 여부
 *
 * @apiSuccessExample {json} Response (example):
 * HTTP/1.1 200 OK
 * {
 *     "success": true
 * }
 *
 * @apiUse NotExistDiscussion
 * @apiUse NotExistOpinion
 * @apiUse CannotDelete
 */
