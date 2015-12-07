//listen to the port 3000
//80端口占用

// var http=require('http');
// http.createServer(function(req,res){
// 	res.writeHead(200,{'Content-Type':'text/html'});
// 	// res.write('<h1>hello world</h1>');
// 	res.end();
// }).listen(8081);
// console.log('http server is listening the port 8081');

var async = require('async');
var dataArr = ['1', '2', '3', '4'];
 
async.forEachSeries(dataArr, function(item, callback) {
    console.log('输出数据:' + item);
    setTimeout(function(){
        console.log('异步调用的内容，再输出: ' + item + 1);
        callback(null, item);
    }, item.delay);
}, function(err) {
    console.log('完毕，是否有错误：' + err);
});







