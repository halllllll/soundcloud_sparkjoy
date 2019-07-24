var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST */
router.post("", (req, res, next) => {
  // console.log("postにきたわけですけども"); 
  let ret = req.body;
  console.log("こちらもらったものです", ret);
  // これkeyはダブルクォーテーションで囲っちゃいけないんだな
  res.send({name: ret.name, status: "success"});
  /* 
  res.json({
    status: "success",
    name: ret.name,
    ret: ret,
  });
  */
});

module.exports = router;
