var http = require('http');
var fs = require("fs");
var docx = require("./docx-html.js");
http.createServer(function (req, res) {
    var doc = docx.docx(__dirname+"/KCBlog2.docx");
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(doc.DOM);
}).listen(process.env.PORT, process.env.IP);
console.log('Server running at '+process.env.IP+":"+process.env.PORT);