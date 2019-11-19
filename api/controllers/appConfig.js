const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    title: 'Feelog',
    description: 'A self help web app that lets users keep track of their feelings.',
  });
});


module.exports = router;