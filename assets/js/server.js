var http=require("http");
var fs=require("fs");
var port=5588;

http.createServer(function (request,response) {
    //跨域  设置在响应头
    response.setHeader("Access-Control-Allow-Origin","*");
    //
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

    fs.readFile("http://dev01.nearsen.cn:9090/nearsen_enterprise/api/web/meetings/getallmeetings","utf-8",function (err,data) {
        if(!err){
            response.end(data);
        }
    })
}).listen(port);
console.log("server running at 5555");