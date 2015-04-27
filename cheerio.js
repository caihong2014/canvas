/*
 *用于回去页面中html中的内容  nodejs
 *author:nan
 *time:2015-4-27
 */

var cheerio=require("cheerio");
var server=require("./download");


var url = "http://wap3.qiushibaike.com/"

server.download(url, function(data) {
  if (data) {
    // console.log(data);
 
    var $ = cheerio.load(data);
    $(".qiushi").each(function(i, e) {
        console.log($(this).text());
    });
 
    console.log("done");
  } else {
      console.log("error");
  } 
});







































