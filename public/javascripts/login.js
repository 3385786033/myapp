//防止汉字输入
function verification() {
    this.value=this.value.replace(/[^\d]/g,'');
}
function addEvent(e) {
    var ev = window.event||e;

}
var phone = document.getElementsByClassName('Main-phone')[0]; //手机号
var code = document.getElementsByClassName('Main-code')[0]; //验证码
phone.addEventListener('keyup',verification);
// code.addEventListener('keyup',verification);

window.onload = function () {
    //发送验证码请求
    var codeBtn = document.getElementsByClassName('Main-sendCode')[0];
    function sendCode() {
        time(this);
        Ajax('get','/getCode',true,null,getCode);
    };
    codeBtn.onclick = sendCode;
};
//倒计时60秒
var wait=60;
function time(o) {
    if (wait == 0) {
        o.removeAttribute("disabled");
        o.value="Gel Code";
        wait = 60;
    } else {
        o.setAttribute("disabled", true); //防止在60秒内重复发送验证码
        o.value="resend(" + wait + ")";
        wait--;
        setTimeout(function() {
            time(o)
        },1000)
    }
}
function getCode() {
    if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
        console.log(xmlhttp.responseText);
        return xmlhttp.responseText;
    }
}
//登录验证
function login() {
    var codeVal = document.getElementById('code').value;
    console.log(getCode());

    if(codeVal == getCode()){
        Ajax('get','/home',true,null,getHome);
       // window.open('192.168.4.243:5000/home');
    }else {
        alert('错误');
    }
}
document.getElementsByClassName('Main-loginBtn')[0].onclick = function () {
    login();
};
//获得首页
function getHome() {
    if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
        console.log(xmlhttp.responseText);
        return xmlhttp.responseText;
    }
}