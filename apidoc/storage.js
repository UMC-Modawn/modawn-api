/**
 * @api {post} /storage 01. 이미지 업로드
 * @apiDescription s3에 이미지를 업로드합니다.<br/>업로드가 완료되면 이미지의 url을 반환합니다.
 * @apiName UploadImage
 * @apiGroup Storage
 * @apiPermission USER_TOKEN
 *
 * @apiBody {File} file 이미지 파일
 *
 * @apiSuccessExample {json} Response (example):
 * HTTP/1.1 201 Created
 * {
 *     "success": true,
 *     "data": {
 *         "url": "https://..."
 *     }
 * }
 */
