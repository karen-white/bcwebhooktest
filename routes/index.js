const express = require('express');
const router = express.Router();

let webhook = "";
/* GET home page. */
router.get('/', (req, res) => {
res.render('index');  
});

router.post('/webhook', (req, res) => {
  webhook = JSON.stringify(req.body);
  res.sendStatus(200);
  res.render('index', { webhook: webhook });
});

module.exports = router;
