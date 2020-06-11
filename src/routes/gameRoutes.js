const express = require('express');
const randomWords = require('random-words');

const router = express.Router();

router.get('/createGame', (req, res) => {
  res.send({ words: randomWords({ exactly: 2, join: '-' }) });
});

module.exports = router;
