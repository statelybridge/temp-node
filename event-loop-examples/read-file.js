const { readFile } = require("fs");
console.log("starting a first task");
// CHECK FILE PATH !!!
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    return console.log(err);
  }
  console.log(result);
  console.log("completed first task");
});
console.log("starting with new task");