/*
 * the code is just used in nodejs for test
 * nan in 2015-4-18
//fs用来读取文件
var fs=require('fs');
fs.readFile('README.md','utf-8',function(err,data){
	if(err){
		console.error(err);
	}else{
		console.log(data);
	}
})
console.log('.end');

//这个例子说明了node中的事件
var EventEmitter=require('events').EventEmitter;
var event=new EventEmitter();
event.on('some_event',function(){
	console.log('some_event occor');
})
event.on('second_event',function(){
	console.log('second_event occor');
})
setTimeout(function(){
	event.emit('some_event');
},1000);

setTimeout(function(){
	event.emit('second_event');
},3000);


//just import a moudle
var myMoudle=require('./moudle');
myMoudle.setName('liyanan');
myMoudle.sayHello();
//node debug n-02.js用来调试代码  run restart cont,c逐行...
var a=1;
var b='world';
var c=function(x){
	console.log('hello'+x+a);
}
c(b);

*/

//*****************************************************************************
//*******此处为node的核心模块****************************
//process是一个全局变量
//console.error();//输出错误
//console.trace();//输出当前的调用栈


//node核心 util模块
// var util=require('util');

// function Base(){
// 	this.name='lee';
// 	this.base=1990;
// 	this.sayHello=function(){
// 		console.log('hello'+this.name);
// 	}
// }

// Base.prototype.showName=function(){
// 	console.log(this.name);
// }

// function Sub(){
// 	this.name='sub';
// }

// util.inherits(Sub,Base);

// var objBase=new Base();
// objBase.showName();  //lee
// objBase.sayHello();  //hello lee
// console.log(objBase); 

// var objSub=new Sub();
// objSub.showName(); 
// console.log(objSub);


//************util.inspect
// var util=require('util');

// function Person(){
// 	this.name='lee';
// 	this.toString=function(){
// 		return this.name;
// 	}
// }

// var obj=new Person();
// console.log(util.inspect(obj));

//事件驱动模块events
var events=require('events');
var emitter=new events.EventEmitter();

emitter.on('someEvent',function(arg1,arg2){
	console.log('listener01',arg1,arg2);
})

emitter.on('someEvent',function(arg1,arg2){
	console.log('listener02',arg1,arg2);
})

emitter.emit('someEvent','lee',1990);




























