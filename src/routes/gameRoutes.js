const express = require('express');
const randomWords = require('random-words');

const router = express.Router();

router.get('/createGame', (req, res) => {
  res.send({ gameId: randomWords({ exactly: 2, join: '-' }) });
});

module.exports = router;
