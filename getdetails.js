/*
 * methods:get details
 * author:nan	
 * time:2015-5-29
 */
var cheerio = require("cheerio");
var fs = require("fs");
var request = require("request");
var AV = require('avoscloud-sdk').AV;
var async=require('async');
// var arr=require('./getxiubai');
// console.log(arr);
AV.initialize("a5zjlnxgv6vhjnstba351wh97s3tc40hsot0no9j2b9wa153", "qhod8u5iijtvgm16g07gw1dm8f4mgmtqnthsloc7rqkyoxgb");

async.series([
 	function(callback){setTimeout(function(){callback(null,getDetails(0,29))},1000)},
	function(callback){setTimeout(function(){callback(null,getDetails(1,28))},1000)}
	// function(callback){setTimeout(function(){callback(null,getDetails(2,27))},3000)},
	// function(callback){setTimeout(function(){callback(null,getDetails(3,26))},4000)},
	// function(callback){setTimeout(function(){callback(null,getDetails(4,25))},5000)},
	// function(callback){setTimeout(function(){callback(null,getDetails(5,24))},6000)},
	// function(callback){setTimeout(function(){callback(null,getDetails(6,23))},7000)},
	// function(callback){setTimeout(function(){callback(null,getDetails(7,22))},8000)},
	// function(callback){setTimeout(function(){callback(null,getDetails(8,21))},9000)},
	// function(callback){setTimeout(function(){callback(null,getDetails(9,20))},10000)},
	// function(callback){setTimeout(function(){callback(null,getDetails(10,19))},11000)},
	// function(callback){setTimeout(function(){callback(null,getDetails(11,18))},12000)},
	// function(callback){setTimeout(function(){callback(null,getDetails(12,17))},13000)},
	// function(callback){setTimeout(function(){callback(null,getDetails(13,16))},14000)},
	// function(callback){setTimeout(function(){callback(null,getDetails(14,15))},15000)},
	// function(callback){setTimeout(function(){callback(null,getDetails(15,14))},16000)},
	// function(callback){setTimeout(function(){callback(null,getDetails(16,13))},17000)},
	// function(callback){setTimeout(function(){callback(null,getDetails(17,12))},18000)},
	// function(callback){setTimeout(function(){callback(null,getDetails(18,11))},19000)},
	// function(callback){setTimeout(function(){callback(null,getDetails(19,10))},20000)},
	// function(callback){setTimeout(function(){callback(null,getDetails(20,9))},21000)},
	// function(callback){setTimeout(function(){callback(null,getDetails(21,8))},22000)},
	// function(callback){setTimeout(function(){callback(null,getDetails(22,7))},23000)},
	// function(callback){setTimeout(function(){callback(null,getDetails(23,6))},24000)},
	// function(callback){setTimeout(function(){callback(null,getDetails(24,5))},25000)},
	// function(callback){setTimeout(function(){callback(null,getDetails(25,4))},26000)},
	// function(callback){setTimeout(function(){callback(null,getDetails(26,3))},27000)},
	// function(callback){setTimeout(function(){callback(null,getDetails(27,2))},28000)},
	// function(callback){setTimeout(function(){callback(null,getDetails(28,1))},29000)},
	// function(callback){setTimeout(function(){callback(null,getDetails(29,0))},30000)}
	],
	function(err,result){
		console.log(result);
	}
 );

function getDetails(i,j){
	AV.Query.doCloudQuery('select * from dailyDetails order by updatedAt asc', {
			success: function(result) {
				//results 是查询返回的结果，AV.Object 列表
				var results = result.results;
				// console.log(results[0].attributes.url_href);
				var dailyDetails = AV.Object.extend("dailyDetails");
				var query = new AV.Query(dailyDetails);

				query.get(results[i].attributes.objectId, {  //i=0,1,2.....
				    success: function(dailyDetails) {
				      request(results[j].attributes.url_href,function(error,response,body){ 
				      //j=29,28,27....
						    var $ = cheerio.load(body);
							// var TestObject = AV.Object.extend("dailyDetails");
							// var testObject = new TestObject();
							// dailyDetails.set('big_img', '');
							// dailyDetails.set('big_title','' );
							// dailyDetails.set('question', '');
							// dailyDetails.set('content', '');
							// dailyDetails.set('url_href', '');

							dailyDetails.set('big_img', $(".content-wrap").find('.img-wrap').find('img').attr("src"));
							dailyDetails.set('big_title',$(".content-wrap").find('.headline-title').text() );
							dailyDetails.set('question', $(".content-wrap").find('.question-title').text());
							dailyDetails.set('content', $(".content-wrap").find('.content').html());
							// dailyDetails.set('url_href', results[j].attributes.url_href);
							console.log('更新成功');	
							dailyDetails.save();
				    	 })
				    
					}
				
				})
			}
	});
				
}
	


				
						
									