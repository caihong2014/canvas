/*
 *get some data from some websites
 *author:nan
 *time:2014-12-12
 */
var fs = require('fs'); //文件读写模块
var request = require("request");
var cheerio = require("cheerio");
var mkdirp = require('mkdirp');

function getData() {
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
		} else {
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
<<<<<<< HEAD
for (var i = 1; i <= 4; i++) {
=======
// for (var i = 16; i <= 20; i++) {
>>>>>>> a743719bd114a178784bb86290096c9be44161ca

	var opts = {
		url: 'http://sexy.faceks.com/post/2c9c66_61c2cf5',
		header: {
			'Connection':'keep-alive',
			'User-Agent':'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36',
 		    'Referer':'http://me2-sex.lofter.com'

		}
	}
	getData();
// }
