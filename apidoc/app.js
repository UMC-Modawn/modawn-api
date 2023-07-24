/**
 * @api {get} /health-check 서버 상태 체크
 * @apiName Health Check
 * @apiGroup App
 *
 * @apiSuccessExample {json} Response (example):
 * HTTP/1.1 200 OK
 * {
 *     "success": true,
 *     "data": {
 *         "uptime": 8.290309046,
 *         "timestamp": "2023-07-24T12:07:33.239Z",
 *         "db": "OK"
 *     }
 * }
 */
