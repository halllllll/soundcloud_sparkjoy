var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST */
router.post("/", (req, res, next) => {
  // console.log("postにきたわけですけども"); 
  let ret = req.body.name;
  console.log("こちらもらったものです", ret);
  res.send(ret);
});

module.exports = router;
