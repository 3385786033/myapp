
module.exports = function (app) {
    /* GET home page. */
    app.get('/', function(req, res) {
        res.render('login', { title: 'login' });
    });
    app.get('/getCode',function (req, res) {
        var sendCode = createCode();
        var code;
        function createCode(){
            code = "";
            var codeLength = 6; //验证码的长度
            var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
                'a','b','c','d','e','f','g','h','i','j','k','l','m',
                'n','o','p','q','r','s','t','u','v','w','x','y','z',
                'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
                'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
                'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
            for(var i = 0; i < codeLength; i++) {
                var charNum = Math.floor(Math.random() * 52);
                code += codeChars[charNum];
            };
            return code;
        }
        res.send(sendCode);
    });
//首页
    app.get('/home',function (req, res) {
        var arr = ['/images/top_01_1203.jpg','/images/top_01_05.jpg','/images/top_02_1203.jpg','/images/top_01_07.jpg'];
        var titleH1=['男的踩得','女的踩得','男的穿的','戴的'];
        var yifu = ['/images/yifu1.png','/images/yufu2.png','/images/baobao1.png','/images/baobao2.png'];
        res.render('home',{title:'home',item:arr,titleh1:titleH1,clothing:yifu});
    });
    app.get('/classActive',function (req, res) {
        var pc_img = ['/images/pc_01.jpg','/images/pos_logo.png','/images/pc_03.jpg','/images/pc_04.jpg'];
        res.render('classActive',{title:'classActive',pc_Img:pc_img});
    });
    app.get('/commodity',function (req, res) {
      res.render('commodity',{title:'commodity'});
    })
};
