
//Ajax  封装
var xmlhttp;
function Ajax(method, url, asyn,param,funs) {
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }else{
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if(method == 'GET'){
        url = url+'?'+param;
    }
    xmlhttp.open(method,url,asyn);
    if(method == 'GET'){
        xmlhttp.send();
    }else {
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(param);
    }
    xmlhttp.onreadystatechange = funs;
}

//阻止默认事件：
function stopDefault(){
    //阻止默认浏览器w3
    if(e&& e.preventDefault){
        e.preventDefault();
    }else {
        //ie
        window.event.returnValue =false ;
        return false;
    }
}
//获取className名
function getByName(className, parent) {
    var oParent = parent?document.getElementById(parent):document;
    var eles = [];
    var elements=oParent.getElementsByTagName('*');
    for(var i = 0;i<elements.length;i++){
        if(elements[i].className == className){
            eles.push(elements[i]);
        }
    }
    return eles;
}