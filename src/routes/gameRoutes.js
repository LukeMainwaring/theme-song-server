const express = require('express');

const router = express.Router();

router.get('/createGame', (req, res) => {
  res.send({ data: 'word1-word2' });
});

module.exports = router;
