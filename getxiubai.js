/*
 *used in getSomething in qiushibaikeauthor:nan
 *author:nan
 *email: liyananhappy@sina.cn
 *time:2015-4-22
 */
var cheerio = require("cheerio");
var fs = require("fs");
var request = require("request");

var opts = {
	url: 'http://www.qiushibaike.com/late/page/1',
	header: {
		'Connection': 'keep-alive',
		'Accept-Language':'zh-CN,zh;q=0.8',
		'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36',
		'Referer': 'http://www.qiushibaike.com'

	}
}
request(opts, function(error, response, body) {
	if (!error && response.statusCode == 200) {
		var $ = cheerio.load(body);
		console.log(body);
		$('.block').each(function() {                 //method find 这块有些问题 ！！！
			console.log('success02');
				var title = $(this).find(".detail").text();
				var author = $(this).find(".author").text();
				var content = $(this).find(".content").text();
				var img=$(this).find(".thumb").find("img").attr("src");
				console.log("标题：" + format(title));
				console.log("作者：" + (format(author) || "匿名"));
				console.log("内容：" + format(content) + "\n\n");

		});
	} else {
		request.end();
	}
});

function format(content) {
	return $.trim(content).replace(/\n\t\r/ig, "");
}