//use fs

let fs=require("fs");

console.log("start");
let f1kaData=fs.readFileSync("./f1.txt","utf8");
console.log(f1kaData);

console.log("end");