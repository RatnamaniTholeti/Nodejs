var http= require('http');
http.createServer(function (req,res)
{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('Keep Smiling');

}).listen(1433);