

//获取id,class,name,
function $(id) {
    return document.getElementById(id);
}
function $$(className) {
    return document.getElementsByClassName(className);
}

//ajax
var xmlhttp;
function Ajax(method, url, asyn,param) {
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
    xmlhttp.onreadystatechange = function () {
        if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
            document.write(window.atob(xmlhttp.responseText));
        }
    };
}