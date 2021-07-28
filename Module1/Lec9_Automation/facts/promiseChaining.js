const fs= require("fs");

let pp=fs.promises.readFile("./f1.txt");

pp.then(function (data){
    console.log(data+"");
    let f2Promise= fs.promises.readFile("f2.txt");
    return f2Promise;
})
.then(function(data){
    console.log(data+"");
})