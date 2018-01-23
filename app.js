var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');  //文件模块
var dns = require('dns'); //dns 模块
var child_process = require('child_process').fork;
var routes = require('./routes/index');

var app = express();

app.set('port',process.env.PORT || 5000);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev')); //日志
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));// 将静态目录设置为public
routes(app);
app.listen(app.get('port'),function () {
    console.log('on port'+app.get('port'));
});
//获取同域名下的多个ip
var options = {all: true}
dns.lookup('www.laozhang.com',function (err,address) {
    if(err) throw err;
    console.log(JSON.stringify(address))
});
// 另一个线程
