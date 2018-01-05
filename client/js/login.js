var suBtn = document.getElementsByClassName('submit')[0];
suBtn.onclick = function () {
    var user = document.getElementById('user');
    var pass = document.getElementById('password');
    var paras = "user="+user.value+'&&pass='+pass.value;
    Ajax('POST','/login',true,paras);
    return false;
};
//创建一个本地数据库
var database = openDatabase('user','1.0','用户表',1024*1024);
database.transaction(function (trans) {  //启动服务
    trans.executeSql('CREATE TABLE IF NOT EXISTS userlist (password unique, name)');
    trans.executeSql('INSERT INTO userlist (password, name) VALUES (123, "admin")');
    trans.executeSql('INSERT INTO userlist (password, name) VALUES (456, "admin02")');
    trans.executeSql('INSERT INTO userlist (password, name) VALUES (789, "admin03")');
})
