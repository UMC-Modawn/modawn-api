/**
 * @api {get} /discussion 01. 토론 목록 조회
 * @apiDescription 토론 목록을 조회합니다.
 * @apiName GetDiscussionList
 * @apiGroup Discussion
 * @apiPermission none
 *
 * @apiQuery {number} [categoryIdx] 토론 카테고리 idx
 * @apiQuery {string} [searchTerm] 검색어
 * @apiQuery {number} [offset] 토론 목록 조회 시작점
 * @apiQuery {number} [limit] 토론 목록 조회 갯수
 *
 * @apiSuccess {boolean} success api 요청 성공 여부
 * @apiSuccess {object} data api 요청 데이터
 * @apiSuccess {number} data.count 토론 목록 총 갯수
 * @apiSuccess {object[]} data.rows 토론 목록
 * @apiSuccess {number} data.rows.idx 토론 idx
 * @apiSuccess {number} data.rows.categoryIdx 토론 카테고리 idx
 * @apiSuccess {number} data.rows.userIdx 토론 작성자 idx
 * @apiSuccess {string} data.rows.title 토론 제목
 * @apiSuccess {string} data.rows.content 토론 내용
 * @apiSuccess {string=DISCUSS,CLOSE} data.rows.status 토론 상태</br>DISCUSS: 토론 진행중</br>CLOSE: 토론 종료
 * @apiSuccess {string} data.rows.url 토론 참고 링크
 * @apiSuccess {string} data.rows.imgUrl 토론 이미지 링크
 * @apiSuccess {string} data.rows.startDate 토론 시작일
 * @apiSuccess {string} data.rows.endDate 토론 종료일
 * @apiSuccess {string} data.rows.createdDate 토론 생성일
 * @apiSuccess {string} data.rows.modifiedDate 토론 수정일
 * @apiSuccess {object} data.rows.discussion_category 토론 카테고리
 * @apiSuccess {number} data.rows.discussion_category.idx 토론 카테고리 idx
 * @apiSuccess {string} data.rows.discussion_category.type 토론 카테고리 타입
 * @apiSuccess {object} data.rows.user 토론 작성자
 * @apiSuccess {number} data.rows.user.idx 토론 작성자 idx
 * @apiSuccess {string} data.rows.user.email 토론 작성자 이메일
 * @apiSuccess {string} data.rows.user.name 토론 작성자 이름
 * @apiSuccess {string} data.rows.user.nickname 토론 작성자 닉네임
 * @apiSuccess {string} data.rows.discussionLikeCount 토론 좋아요 갯수
 *
 * @apiSuccessExample {json} Response (example):
 * HTTP/1.1 200 OK
 * {
 *     "success": true,
 *     "data": {
 *         "count": 1,
 *         "rows": [
 *             {
 *                 "idx": 19,
 *                 "categoryIdx": 1,
 *                 "userIdx": 2,
 *                 "title": "test1",
 *                 "content": "content1",
 *                 "status": "DISCUSS",
 *                 "url": null,
 *                 "imgUrl": null,
 *                 "startDate": "2023-07-29T16:35:51.000Z",
 *                 "endDate": "2023-08-10T00:00:00.000Z",
 *                 "createdDate": "2023-07-29T16:35:51.000Z",
 *                 "modifiedDate": "2023-07-29T16:35:51.000Z",
 *                 "discussion_category": {
 *                     "idx": 1,
 *                     "type": "t1"
 *                 },
 *                 "user": {
 *                     "idx": 2,
 *                     "email": "jiho5993@gmail.com",
 *                     "name": "박지호1",
 *                     "nickname": "호지1",
 *                     "createdDate": "2023-07-29T07:11:40.000Z",
 *                     "modifiedDate": "2023-07-29T07:11:40.000Z"
 *                 },
 *                 "discussionLikeCount": 0
 *             }
 *         ]
 *     }
 * }
 */

/**
 * @api {get} /discussion/:discussionIdx 02. 토론 상세 조회
 * @apiDescription 토론 상세 정보를 조회합니다.
 * @apiName GetDiscussionDetail
 * @apiGroup Discussion
 * @apiPermission USER_TOKEN
 *
 * @apiHeader {string} Authorization user 토큰</br>ex) Bearer USER_TOKEN
 *
 * @apiParam {number} discussionIdx 토론 idx
 *
 * @apiSuccess {boolean} success api 요청 성공 여부
 * @apiSuccess {object} data api 요청 데이터
 * @apiSuccess {number} data.discussion 토론 정보
 * @apiSuccess {number} data.discussion.idx 토론 idx
 * @apiSuccess {number} data.discussion.categoryIdx 토론 카테고리 idx
 * @apiSuccess {number} data.discussion.userIdx 토론 작성자 idx
 * @apiSuccess {string} data.discussion.title 토론 제목
 * @apiSuccess {string} data.discussion.content 토론 내용
 * @apiSuccess {string=DISCUSS,CLOSE} data.discussion.status 토론 상태</br>DISCUSS: 토론 진행중</br>CLOSE: 토론 종료
 * @apiSuccess {string} data.discussion.url 토론 참고 링크
 * @apiSuccess {string} data.discussion.imgUrl 토론 이미지 링크
 * @apiSuccess {string} data.discussion.startDate 토론 시작일
 * @apiSuccess {string} data.discussion.endDate 토론 종료일
 * @apiSuccess {string} data.discussion.createdDate 토론 생성일
 * @apiSuccess {string} data.discussion.modifiedDate 토론 수정일
 * @apiSuccess {object} data.discussion.discussion_category 토론 카테고리
 * @apiSuccess {number} data.discussion.discussion_category.idx 토론 카테고리 idx
 * @apiSuccess {string} data.discussion.discussion_category.type 토론 카테고리 타입
 * @apiSuccess {object} data.discussion.user 토론 작성자
 * @apiSuccess {number} data.discussion.user.idx 토론 작성자 idx
 * @apiSuccess {string} data.discussion.user.email 토론 작성자 이메일
 * @apiSuccess {string} data.discussion.user.name 토론 작성자 이름
 * @apiSuccess {string} data.discussion.user.nickname 토론 작성자 닉네임
 * @apiSuccess {string} data.discussion.opinionApproves 토론 찬성 의견
 * @apiSuccess {string} data.discussion.opinionApproves.idx 토론 찬성 의견 idx
 * @apiSuccess {string} data.discussion.opinionApproves.title 토론 찬성 의견 제목
 * @apiSuccess {string} data.discussion.opinionApproves.likeCount 토론 찬성 의견 좋아요 갯수
 * @apiSuccess {string} data.discussion.opinionDisapproves 토론 반대 의견
 * @apiSuccess {string} data.discussion.opinionOthers 토론 기타 의견
 * @apiSuccess {string} data.discussion.userDiscussionLike 토론 좋아요 여부
 * @apiSuccess {string} data.discussion.discussionLikeCount 토론 좋아요 갯수
 *
 *
 * @apiSuccessExample {json} Response (example):
 * HTTP/1.1 200 OK
 * {
 *     "success": true,
 *     "data": {
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
 *             "modifiedDate": "2023-07-28T00:01:47.000Z",
 *             "discussion_category": {
 *                 "idx": 3,
 *                 "type": "t3"
 *             },
 *             "user": {
 *                 "idx": 1,
 *                 "email": "jiho59937@gmail.com",
 *                 "name": "박지호",
 *                 "nickname": "호지",
 *                 "createdDate": "2023-07-27T14:58:04.000Z",
 *                 "modifiedDate": "2023-07-27T14:58:04.000Z"
 *             },
 *             "opinionApproves": [
 *                 {
 *                     "idx": 8,
 *                     "title": "t8",
 *                     "likeCount": 2
 *                 },
 *                 {
 *                     "idx": 4,
 *                     "title": "t4",
 *                     "likeCount": 1
 *                 },
 *                 {
 *                     "idx": 9,
 *                     "title": "t9",
 *                     "likeCount": 1
 *                 }
 *             ],
 *             "opinionDisapproves": [
 *                 {
 *                     "idx": 6,
 *                     "title": "t6",
 *                     "likeCount": 0
 *                 },
 *                 {
 *                     "idx": 7,
 *                     "title": "t7",
 *                     "likeCount": 0
 *                 }
 *             ],
 *             "opinionOthers": [
 *                 {
 *                     "idx": 3,
 *                     "title": "t3",
 *                     "likeCount": 0
 *                 }
 *             ]
 *         },
 *         "userDiscussionLike": true,
 *         "discussionLikeCount": 1
 *     }
 * }
 *
 * @apiUse NotExistDiscussion
 */

/**
 * @api {post} /discussion/:discussionIdx/like 03. 토론 좋아요 등록/취소
 * @apiDescription 토론 좋아요 등록/취소</br>좋아요를 누르지 않은 상태에서 api 요청시, 좋아요 등록</br>좋아요를 누른 상태에서 api 요청시, 좋아요 취소
 * @apiName addDiscussionLike
 * @apiGroup Discussion
 * @apiPermission USER_TOKEN
 *
 * @apiHeader {string} Authorization user 토큰</br>ex) Bearer USER_TOKEN
 *
 * @apiParam {number} discussionIdx 토론 idx
 *
 * @apiSuccess {boolean} success api 요청 성공 여부
 *
 * @apiSuccessExample {json} Response (example):
 * HTTP/1.1 201 Created
 * {
 *     "success": true
 * }
 */

/**
 * @api {post} /discussion 04. 토론 등록
 * @apiDescription 토론 등록
 * @apiName addDiscussion
 * @apiGroup Discussion
 * @apiPermission USER_TOKEN
 *
 * @apiHeader {string} Authorization user 토큰</br>ex) Bearer USER_TOKEN
 *
 * @apiBody {string} title 토론 제목
 * @apiBody {string} content 토론 내용
 * @apiBody {number} categoryIdx 토론 카테고리 idx
 * @apiBody {string} [url] 토론 참고 링크
 * @apiBody {string} [imgUrl] 토론 이미지 url
 * @apiBody {date} endDate 토론 종료일
 *
 * @apiSuccess {boolean} success api 요청 성공 여부
 *
 * @apiSuccessExample {json} Response (example):
 * HTTP/1.1 201 Created
 * {
 *     "success": true
 * }
 *
 * @apiUse NotExistDiscussionCategory
 */

/**
 * @api {delete} /discussion/:discussionIdx 05. 토론 삭제
 * @apiDescription 토론 삭제
 * @apiName deleteDiscussion
 * @apiGroup Discussion
 * @apiPermission USER_TOKEN
 *
 * @apiHeader {string} Authorization user 토큰</br>ex) Bearer USER_TOKEN
 *
 * @apiParam {number} discussionIdx 토론 idx
 *
 * @apiSuccess {boolean} success api 요청 성공 여부
 *
 * @apiSuccessExample {json} Response (example):
 * HTTP/1.1 200 OK
 * {
 *     "success": true
 * }
 *
 * @apiUse NotExistDiscussion
 * @apiUse CannotDeleteDiscussion
 */

/**
 * @api {put} /discussion/:discussionIdx/status 06. 토론 상태 변경
 * @apiDescription 토론 상태 변경
 * @apiName updateDiscussionStatus
 * @apiGroup Discussion
 * @apiPermission USER_TOKEN
 *
 * @apiHeader {string} Authorization user 토큰</br>ex) Bearer USER_TOKEN
 *
 * @apiParam {number} discussionIdx 토론 idx
 *
 * @apiBody {string=DISCUSS,CLOSE} status 토론 상태
 *
 * @apiSuccess {boolean} success api 요청 성공 여부
 *
 * @apiSuccessExample {json} Response (example):
 * HTTP/1.1 200 OK
 * {
 *     "success": true
 * }
 *
 * @apiUse NotExistDiscussion
 * @apiUse CannotUpdateDiscussion
 */
