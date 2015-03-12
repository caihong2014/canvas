// var http=require("http");

// http.createServer(function(request,response){
// 	console.log("request received");
// 	response.writeHead(200,{"content-type":"text/plain"});
// 	response.write('hello world');
// 	response.end();
// }).listen(8080);
// console.log("server has start");

//依赖模块

var fs = require('fs');  //文件读写模块
var request = require("request");
var cheerio = require("cheerio");//类似jquery类选择器一样工作
var mkdirp = require('mkdirp');
//目标网址
// var x=5;
var url = 'http://me2-sex.lofter.com/tag/美女摄影?page=8';
// var url="http://huaban.com/explore/yinghua/";
// setInterval(function(){return x++;},10000);
//本地存储目录
var dir = './huabanimages';
//创建目录
mkdirp(dir, function(err) {
if(err){
console.log(err);
}
});
//发送请求
request(url, function(error, response, body) {
if(!error && response.statusCode == 200) {
var $ = cheerio.load(body);
$('.img img').each(function() {
var src = $(this).attr('src');
console.log('正在下载' + src);
download(src, dir, Math.floor(Math.random()*100000) + src.substr(-4,4));
console.log('下载完成');
});
}
});
//下载方法
var download = function(url, dir, filename){
request.head(url, function(err, res, body){
request(url).pipe(fs.createWriteStream(dir + "/" + filename));
});
};








