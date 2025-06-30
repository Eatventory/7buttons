const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());

// 예시 라우트
app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong' });
});

// Analytics 수집용 엔드포인트 (DB 저장 없이 응답만)
app.post('/api/analytics/collect', (req, res) => {
  res.status(200).json({ success: true });
});

module.exports = app;