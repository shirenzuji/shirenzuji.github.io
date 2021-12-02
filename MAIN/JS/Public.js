// console.log("Public.js运行成功！");

// // var xmlhttp = new XMLHttpRequest();
// var url = "http://open.edukg.cn/opedukg/api/typeAuth/user/login?password=shirenzuji2021&phone=18519660660";
// // xmlhttp.open("POST", url, true);
// // xmlhttp.send;
// // // var recieve_a = JSON.parse(xmlhttp.responseText);

// // var recieve = '[{"id":1,"name":"liming"},{"id":2,"name":"xiaobai"}]';
// // var rec = '{ "name":"runoob", "alexa":10000, "site":"www.runoob.com" }';
// // var abc = JSON.parse(recieve);
// // var bcd = JSON.parse(rec);

// // console.log(abc);
// // console.log(bcd);
// // console.log(xmlhttp.responseText);
// // console.log(recieve_a);

// var http = require('http');
// var querystring = require('querystring');
 
// var postHTML = 
//   '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
//   '<body>' +
//   '<form method="post">' +
//   '网站名： <input name="name"><br>' +
//   '网站 URL： <input name="url"><br>' +
//   '<input type="submit">' +
//   '</form>' +
//   '</body></html>';
 
// http.createServer(function (req, res) {
//   var body = "";
//   req.on('data', function (chunk) {
//     body += chunk;
//   });
//   req.on('end', function () {
//     // 解析参数
//     body = querystring.parse(body);
//     // 设置响应头部信息及编码
//     res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
 
//     if(body.name && body.url) { // 输出提交的数据   
//         res.write("网站名：" + body.name);
//         res.write("<br>");
//         res.write("网站 URL：" + body.url);
//     } else {  // 输出表单
//         res.write(postHTML);
//     }
//     res.end();
//   });
// }).listen(3000);

var data = "password=shirenzuji2021&phone=18519660660";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.timeout = 10000

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "//open.edukg.cn/opedukg/api/typeAuth/user/login");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.send(data);