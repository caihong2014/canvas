//listen to the port 3000
//80端口占用

var http=require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write('<h1>hello world</h1>');
	res.end();
}).listen(3000);
console.log('http server is listening the port 3000');