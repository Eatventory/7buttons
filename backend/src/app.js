const express = require('express');
const app = express();

app.use(express.json());

// 예시 라우트
app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong' });
});

module.exports = app;