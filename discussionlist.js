const express = require('express');
const router = express.Router();
const Discussion = require('../models/discussion');

// 토론 목록 조회 API
router.get('/discussions', async (req, res) => {
  try {
    // 데이터베이스에서 토론 목록을 조회합니다.
    const discussions = await Discussion.find({});

    // 필요한 정보만 추출하여 새로운 배열을 만듭니다.
    const discussionList = discussions.map(discussion => ({
      title: discussion.title, // 토론 제목
      createdDate: discussion.createdAt, // 생성된 날짜
      modifiedDate: discussion.updatedAt, // 수정된 날짜
      startDate: discussion.startDate, // 토론 시작 날짜
      endDate: discussion.endDate, // 토론 종료 날짜
      userIdx: discussion.userIdx, // 사용자 인덱스 (사용자 고유 식별자)
      status: discussion.status, // 토론 상태
      Field: discussion.Field // 토론 분야 (예: 스포츠, 정치 등)
    }));

    // 결과를 JSON 형식으로 반환합니다.
    res.json(discussionList);
  } catch (err) {
    res.status(500).json({ message: err.message }); // 에러 발생 시 에러 메시지를 반환합니다.
  }
});

module.exports = router;
