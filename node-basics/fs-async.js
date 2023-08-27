const {readFile,writeFile} = require('fs');

console.log('start');
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        return console.log(err);
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            return console.log(err);
        }
        const second = result;
        writeFile('./content/result-async.txt',`here is the result: ${first}, ${second}`,(err,result)=>{
            if(err){
                return console.log(err);
            }
            console.log('done with the this task');
        })
    })
})
console.log('starting with new task');