/*
 * used in get news details in zhihu
 * nan
 * email:liyananhappy@sina.cn	
 * time: 2015-6-15
 */

var cheerio = require("cheerio");
var fs = require("fs");
var request = require("request");


// for(var i=2;i<=2;i++){
	var opts = {
		url: 'http://blog.infographics.tw/page/2/',
		header: {
			'Connection': 'keep-alive',
			'Accept-Language':'zh-CN,zh;q=0.8',
			'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36',
			'Referer': 'http://blog.infographics.tw/page/2/'

		}
	}
	request(opts.url, function(error,response,body) {
		if (!error && response.statusCode == 200) {
			var $ = cheerio.load(body,{decodeEntities: false});
			var contents=$("li.item h2");
			console.log(contents.length);
			for(var i=0;i<contents.length;i++){
				console.log($(contents[i]).text());
			}
		} else {
			request.end();
		}
	});

// }













