const path = require('path')
console.log(path.sep)

//will join them and concatenate
const filepath = path.join('/content','subfolder','text.txt')
console.log(filepath)

// end file of path
const base = path.basename(filepath)
console.log(path)

//returns absolute path
const absolute = path.resolve(__dirname,'content','subfolder','text.txt');
console.log(absolute)