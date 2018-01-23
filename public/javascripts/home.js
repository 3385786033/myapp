var buttons = document.getElementById('slideBtn').getElementsByTagName('span');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var bannerList = document.getElementById('bannerList');
var imgs = bannerList.getElementsByTagName('a');
var banner = document.getElementById('banner');
/*轮播*/
buttons[0].className = 'on';
var num = 0;
var xh = null;
function play(num) {
    for(var i = 0;i<imgs.length;i++){
        imgs[i].className = '';
        buttons[i].className = '';
    }
    imgs[num].className = 'on';
    buttons[num].className = 'on';
}
function autoplay() {
    xh = setInterval(function () {
        num++;
        if(num>=imgs.length){
            num = 0;
        }
        play(num);
    },3000);
}
autoplay();
//鼠标移入暂停
banner.onmousemove = function () {
    clearInterval(xh);
    xh = null;
};
banner.onmouseout = function () {
    autoplay();
};
for(var i = 0;i<buttons.length;i++){
    buttons[i].index = i;
    buttons[i].onmousemove = function () {
        num = this.index;
        play(this.index);
    }
};
//下一张
next.onclick = function () {
    num++;
    if(num>=imgs.length){
        num = 0;
    }
    play(num);
};
prev.onclick = function () {
    num--;
    if(num <= 0){
        num = imgs.length-1;
    }
  console.log(num)
    play(num);
};



















/*var index = 1;
var animated = false;
prev.onclick = function () {
    if(index == 1){
        index = 6;
    }else {
        index -= 1;
    }
    traverseSpan();
};
next.onclick = function () {
    if(index == 6){
        index = 1;
    }else {
        index += 1;
    }
    traverseSpan();
}
//遍历圆点
function traverseSpan() {
    for(var i = 0;i<buttons.length;i++){
        var button = buttons[i];
        if(button.className == 'active'){
            button.className = '';
            break;
        }
    }
    buttons[index-1].className='active';
}
//圆点切换
for(var i = 0;i<buttons.length;i++){
    var button = buttons[i];
    button.onclick = function () {
        if(this.className == 'active') return;
        var myIndex = parseInt(this.getAttribute('index'));
        //var offset =
    }
}*/
//下标切换
var clearfix = document.getElementsByClassName('clearfix')[0];
var cleLi = clearfix.getElementsByTagName('li');
for(var i = 0;i<cleLi.length;i++){
    cleLi[i].onmousemove = function (e) {
        var ev = window.event||e;
        var Lefts = ev.clientX;
        document.getElementsByClassName('brand-menu')[0].style.transition = '.5s linear';
        document.getElementsByClassName('brand-menu')[0].style.left = this.offsetLeft+100 +"px";
    }
}
//微信扫码、

var wechat = document.getElementsByClassName('wechat')[0];
function show(classNames) {
    this.classNames = document.getElementsByClassName(classNames)[0];
    this.show = function () {
        this.classNames.style.display = 'block';
        var wechatClose = getByName('closeBtn');
        wechatClose[0].onclick = function () {
            getByName('wechat-popup')[0].style.display = 'none';
        }
    };
    this.hidden = function () {
        this.classNames.style.display = 'none';
    }
}
wechat.onclick = function () {
    var x = new show('wechat-popup');
    x.show();
};


