var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pearyman' });
});

router.get('/hello', function(req, res, next) {
   res.send('the time is'+new Date().toString());
});

// exports.index=function(req,res){
// 	res.render('index',{title:'express'});
// }

// exports.hello=function(req,res){
 
// }
module.exports = router;
