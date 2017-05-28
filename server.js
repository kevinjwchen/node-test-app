var express = require('express');
var fs = require('fs');
var app = express();

app.get('/listApplicants', function(req,res){
    fs.readFile(__dirname+"/"+"applicants.json",'utf8',function(err,data){
        console.log(data);
        res.header("Access-Control-Allow_Origin","*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By",' 3.2.1');
        res.header("Content-Type", "application/json;charset=utf-8");
        res.end(data);
    })
})

var server = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("host",host);
    console.log("Please visit http://%s:%s", host, port);
})
