/*
 *used in getSomething in qiushibaikeauthor:nan
 *author:nan
 *email: liyananhappy@sina.cn
 *time:2015-4-22
 */

var cheerio = require("cheerio");
var fs = require("fs");
var request = require("request");
var AV = require('avoscloud-sdk').AV;
var async=require('async');
var arr=new Array();
AV.initialize("a5zjlnxgv6vhjnstba351wh97s3tc40hsot0no9j2b9wa153", "qhod8u5iijtvgm16g07gw1dm8f4mgmtqnthsloc7rqkyoxgb");
var opts = {
	url: 'http://daily.zhihu.com',
	header: {
		'Connection': 'keep-alive',
		'Accept-Language':'zh-CN,zh;q=0.8',
		'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36',
		'Referer': 'http://www.zhihu.com'

	}
}


async.series([
	function(callback){setTimeout(function(){callback(null,getTitle(0))},100)},
	function(callback){setTimeout(function(){callback(null,getDetails(0))},1500)},
	function(callback){setTimeout(function(){callback(null,getTitle(1))},100)},
	function(callback){setTimeout(function(){callback(null,getDetails(0))},1500)},
	function(callback){setTimeout(function(){callback(null,getTitle(2))},100)},
	function(callback){setTimeout(function(){callback(null,getDetails(0))},1500)},
	function(callback){setTimeout(function(){callback(null,getTitle(3))},100)},
	function(callback){setTimeout(function(){callback(null,getDetails(0))},1500)},
	function(callback){setTimeout(function(){callback(null,getTitle(4))},100)},
	function(callback){setTimeout(function(){callback(null,getDetails(0))},1500)},
	function(callback){setTimeout(function(){callback(null,getTitle(5))},100)},
	function(callback){setTimeout(function(){callback(null,getDetails(0))},1500)},
	function(callback){setTimeout(function(){callback(null,getTitle(6))},100)},
	function(callback){setTimeout(function(){callback(null,getDetails(0))},1500)},
	function(callback){setTimeout(function(){callback(null,getTitle(7))},100)},
	function(callback){setTimeout(function(){callback(null,getDetails(0))},1500)},
	function(callback){setTimeout(function(){callback(null,getTitle(8))},100)},
	function(callback){setTimeout(function(){callback(null,getDetails(0))},1500)},
	function(callback){setTimeout(function(){callback(null,getTitle(9))},100)},
	function(callback){setTimeout(function(){callback(null,getDetails(0))},1500)},
	function(callback){setTimeout(function(){callback(null,getTitle(10))},100)},
	function(callback){setTimeout(function(){callback(null,getDetails(0))},1500)},
	function(callback){setTimeout(function(){callback(null,getTitle(11))},100)},
	function(callback){setTimeout(function(){callback(null,getDetails(0))},1500)},
	function(callback){setTimeout(function(){callback(null,getTitle(12))},100)},
	function(callback){setTimeout(function(){callback(null,getDetails(0))},1500)},
	function(callback){setTimeout(function(){callback(null,getTitle(13))},100)},
	function(callback){setTimeout(function(){callback(null,getDetails(0))},1500)},
	function(callback){setTimeout(function(){callback(null,getTitle(14))},100)},
	function(callback){setTimeout(function(){callback(null,getDetails(0))},1500)},
	function(callback){setTimeout(function(){callback(null,getTitle(15))},100)},
	function(callback){setTimeout(function(){callback(null,getDetails(0))},1500)},
	function(callback){setTimeout(function(){callback(null,getTitle(16))},100)},
	function(callback){setTimeout(function(){callback(null,getDetails(0))},1500)},
	function(callback){setTimeout(function(){callback(null,getTitle(17))},100)},
	function(callback){setTimeout(function(){callback(null,getDetails(0))},1500)},
	function(callback){setTimeout(function(){callback(null,getTitle(18))},100)},
	function(callback){setTimeout(function(){callback(null,getDetails(0))},1500)},
	function(callback){setTimeout(function(){callback(null,getTitle(19))},100)},
	function(callback){setTimeout(function(){callback(null,getDetails(0))},1500)},
	function(callback){setTimeout(function(){callback(null,getTitle(20))},100)},
	function(callback){setTimeout(function(){callback(null,getDetails(0))},1500)}
	],
	function(err,result){
		console.log('男哥 第一组更新完毕');
		// request.end();
	}
 );
function getTitle(j){
	request(opts, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var $ = cheerio.load(body);
				var TestObject = AV.Object.extend("dailyNews");
				var testObject = new TestObject();
				testObject.save({url_href:$(".link-button").eq(j).attr('href'),img_url:$(".link-button").eq(j).find('.preview-image').attr('src'),title:$(".link-button").eq(j).find('.title').text()}, {
							success: function(url_href) {
								console.log("获取标题成功");	
								arr.push(url_href.attributes.url_href);
								
														
							}
					});
		} else {
			request.end();
		}
	});
}

// order by objectId desc

function getDetails(i){
	// console.log(arr[0]);
	AV.Query.doCloudQuery('select * from dailyNews', {
			success: function(result) {
				//results 是查询返回的结果，AV.Object 列表
				var results = result.results;
				// console.log(results[0].attributes.url_href);
				var dailyNews = AV.Object.extend("dailyNews");
				var query = new AV.Query(dailyNews);

				query.get(results[i].attributes.objectId, {  //i=0,1,2.....
				    success: function(dailyNews) {
				      request(results[i].attributes.url_href,function(error,response,body){ 
				      //j=29,28,27....
						    var $ = cheerio.load(body);
							dailyNews.set('big_img', $('.img-wrap').find('img').attr("src"));
							dailyNews.set('big_title',$('.headline-title').text() );
							dailyNews.set('question', $('.question-title').text());
							dailyNews.set('content', $('.content').html());
							console.log('更新成功');	
							dailyNews.save();
				    	 })
				    
					}
				
				})
			}
	});
	
}

function format(content) {
	return $.trim(content).replace(/\n\t\r/ig, "");
}