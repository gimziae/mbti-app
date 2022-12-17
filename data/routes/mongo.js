// @ts-check
const express = require('express');
const router = express.Router();

const mongoDB = require('../controller/mongoController');

// 방문자수 관리
router.post('/inccount', async (req, res) => {
  const msg = await mongoDB.incCounts();
  res.send(JSON.stringify(msg));
});
router.get('/count', async (req, res) => {
  const counts = await mongoDB.getCounts();
  res.send(counts);
});

// 데이타 관리
router.post('/setdata', async (req, res) => {
  const msg = await mongoDB.setData();
  res.send(JSON.stringify(msg)); // 프론트 단에 넘겨줘야하므로 json 로 변경
});

router.get('/getdata', async (req, res) => {
  const data = await mongoDB.getData();
  res.send(data);
});

module.exports = router;
