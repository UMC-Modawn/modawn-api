/**
 * @api {http method 입력} /endpoint입력 01. 새로운 api가 추가될 때마다 넘버링을 하고 api의 제목을 입력합니다.
 * @apiDescription api 설명을 입력합니다.
 * @apiName api이름을 입력합니다. (ex. idx별 유저 정보를 조회하는 api일 경우 : getUserByIdx)
 * @apiGroup api가 속한 그룹명을 입력합니다. (ex. User)
 *
 * @apiHeader {type} header api에 사용되는 header 정보를 입력합니다.
 *
 * @apiQuery {type} query api에 사용되는 query 정보를 입력합니다.
 *
 * @apiParam {type} parameter api에 사용되는 parameter 정보를 입력합니다.
 *
 * @apiBody {type} body api에 사용되는 body 정보를 입력합니다.
 *
 * @apiSuccessExample {json} Response (example):
 * api의 response 예시를 입력합니다.
 *
 * ex)
 * HTTP/1.1 200 OK
 * {
 *     "success": true,
 *     "data": {
 *         "idx": 3,
 *         "name": "name 3",
 *         "nickname": "박지호",
 *         "temperature": 36.5,
 *         "createdDate": "2023-05-05T08:44:50.094Z",
 *         "updatedDate": "2023-05-31T03:01:14.078Z"
 *     }
 * }
 */
