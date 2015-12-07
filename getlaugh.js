/*
 * used in get news details in zhihu
 * nan
 * email:liyananhappy@sina.cn	
 * time: 2015-6-15
 */

var cheerio = require("cheerio");
var fs = require("fs");
var request = require("request");
var AV = require('avoscloud-sdk').AV;
AV.initialize("a5zjlnxgv6vhjnstba351wh97s3tc40hsot0no9j2b9wa153", "qhod8u5iijtvgm16g07gw1dm8f4mgmtqnthsloc7rqkyoxgb");

var opts = {
	url: 'http://heibaimanhua.com/funlailiao/67216.html',
	header: {
		'Connection': 'keep-alive',
		'Accept-Language':'zh-CN,zh;q=0.8',
		'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36',
		'Referer': 'http://heibaimanhua.com'

	}
}

request(opts, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var $ = cheerio.load(body);
				var TestObject = AV.Object.extend("dailyNews");
				var testObject = new TestObject();
				testObject.save({question:$(".article-header").text(),img_url:'http://ac-a5zjlnxg.clouddn.com/9bVyIixddpREs3SgJcEmgbPjY9VKwx3t0UfCO3Lp.jpg',content:$('.article-content').html(),title:$(".article-header").text(),big_img:'http://ac-a5zjlnxg.clouddn.com/9bVyIixddpREs3SgJcEmgbPjY9VKwx3t0UfCO3Lp.jpg',url_href:opts.url}, {
						success: function(url_href) {
						console.log("获取详情成功");	
						// arr.push(url_href.attributes.url_href);
								
														
							}
					});
		} else {
			request.end();
		}
	});












