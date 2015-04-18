/*
 *get some data from some websites
 *author:nan
 *time:2014-12-12
 */ 
var fs = require('fs'); //文件读写模块
var request = require("request");
var cheerio = require("cheerio"); 
var mkdirp = require('mkdirp');
//目标网址
for(var i=3;i<=4;i++){
	// var url = 'http://me2-sex.lofter.com/tag/美女摄影?page=i';
	var opts={
		url:'http://me2-sex.lofter.com/tag/美女摄影?page=i',
		header:{
			 'Content-Type':'application/x-www-form-urlencoded'
		}
	}
	//本地存储目录
	var dir = './images';
	//创建目录
	mkdirp(dir, function(err) {
		if (err) {
			console.log(err);
		}
	});
	//发送请求
	request(opts, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var $ = cheerio.load(body);
			$('.img img').each(function() {
				var src = $(this).attr('src');
				console.log('正在下载' + src);
				download(src, dir, Math.floor(Math.random() * 100000) + src.substr(-4, 4));
				console.log('下载完成');
			});
		}else{
			request.end();
		}
	});
	//下载方法
	var download = function(url, dir, filename) {
		request.head(url, function(err, res, body) {
			request(url).pipe(fs.createWriteStream(dir + "/" + filename));
		});
	};
}
