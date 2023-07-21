var http= require('http');
var imp = require('./firstmodule');
http.createServer(function (req,res)
{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(imp.myDate());
    res.end();

}).listen(65);