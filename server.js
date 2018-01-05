var http = require('http');
var express = require('express');
var ejs = require('ejs');
var path = require('path');  //路径模块
var bodyParser = require('body-parser');
var fs = require('fs');  //文件模块
var gm = require('gm');
var upload = require('multer')({ dest: 'uploads/' }); //上传中间件
var home = require('./server/dao/home');
//缓存区
var buffer = require('./server/bufferJs/buffer');
var app = express();

app.use(bodyParser.urlencoded({extended:false}));  //获取post传过来的数据
var port = process.env.PORT || 8002;
app.set('view engine','html'); //指定文件模板格式时，设置路由指定文件时，只需写文件名，就会自动找到对应的html文件
app.set('views','./client/html');
app.engine('ejs',ejs.__express);

app.use(express.static(path.join(__dirname+'/client'))); //设置静态文件目录
//图片gm模板

//创建模块
app.get('/footo',function (req, res) {
    fs.readFile('./client/html/index.html',function (err, data) {
        if(err){
            console.log(err);
        }else {
            var buf = new Buffer(data,'utf-8');
            var imgs = './client/images/dog.jpg';
            var buff = new Buffer(imgs,'base64');
            res.writeHead(200,{"Content-Type":"text/html"});
            console.log(buff);
            res.write(data.toString())
           // console.log(data.toString());
            var bodys = data.toString();
            var REG_BODY = /<body[^>]*>([\s\S]*)<\/body>/g;
            var s = REG_BODY.exec(bodys);
            //
            // var x = s.toString();
            // var t = x.replace(/\s+/g, "");
        }
        res.send();
    })
});
app.post('/foo',function (req, res) {
    console.log(req.body.Imgurl);
    var f = new Buffer(req.body.Imgurl,'base64').toString();
    console.log(f);
    fs.readFile("./client/images/dog.jpg",'utf8',function (err, data) {  //读取文件
        if(err){
            console.log(err);
        }else {
            var bus = new Buffer(data,'base64');
            fs.writeFile('./client/images/dogs.jpg',bus,function (err) {
                if(err){
                    console.log(err);
                }
            });
            console.log(bus)
            res.send(bus);
        }
    })
});
app.post('/upload',upload.single('test-upload'), function(req, res) {
    // 没有附带文件
    if (!req.file) {
    res.json({ ok: false });
    return;
}

// 输出文件信息
console.log('====================================================');
console.log('fieldname: ' + req.file.fieldname);
console.log('originalname: ' + req.file.originalname);
console.log('encoding: ' + req.file.encoding);
console.log('mimetype: ' + req.file.mimetype);
console.log('size: ' + (req.file.size / 1024).toFixed(2) + 'KB');
console.log('destination: ' + req.file.destination);
console.log('filename: ' + req.file.filename);
console.log('path: ' + req.file.path);

// 重命名文件
var oldPath = path.join(__dirname, req.file.path);
var  newPath = path.join(__dirname, 'uploads/' + req.file.originalname);
fs.rename(oldPath, newPath, function(err) {
    if (err) {
        res.json({ok: false});
        console.log(err);
    } else {
        res.json({ok: true});
    }
})
});
// app.get('/',function (req, res) {
//     res.sendfile('./client/html/login.html');
// });
// app.use(express.basicAuth(function(user,pass){
//     return user==="gys"&&pass==="123";
// }));
app.get('/index',function (res, req) {
    req.sendfile('./client/html/index.html');
});
app.post('/login',home.logins); //验证登录
app.get('/',function (res, req) {
    req.sendfile('./client/html/shiyan.html')
})
//缓存区调用
app.listen(port);
