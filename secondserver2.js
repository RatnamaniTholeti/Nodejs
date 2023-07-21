var http= require('http');
var imp = require('./secondmodule');
http.createServer(function (req,res)
{
    res.writeHead(200,{'Content-Type':'text/html'});
    console.log(imp.my);
    // res.write(imp.my);
    res.end();

}).listen(30);