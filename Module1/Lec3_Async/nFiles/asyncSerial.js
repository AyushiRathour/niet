let fs=require("fs");
let files=["../f1.txt" , "../f2.txt" , "../f3.txt"];

let i=0;

function prin(i){
    if(i==files.length)
        return;
    fs.readFile(files[i],function(error,data){
        console.log(data+"");
        prin(i+1);
    });
    
}

prin(0);