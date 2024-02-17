// load http module
const http = require('http');
const fs = require('fs');
// create http server
http
.createServer((req, res) => {
  
const buf = "I'm going to write this text to a file";
fs.writeFile('main2.txt', buf, err => {
if (err) throw err;
console.log('wrote text to file');
});
// content header
res.writeHead(200, { 'content-type': 'text/plain' });
// write message and signal communication is complete
res.end('Hello, World!');
})
.listen(8124);
console.log('Server running on port 8124');