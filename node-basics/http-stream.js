//opening files in matter of chunks
var http = require('http')
var fs = require('fs')

http.createServer(function (req,res){
    const fileStream = fs.createReadStream('./content/big.txt','utf8');
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
        req.end(err);
    })
})