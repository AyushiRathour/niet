let fs=require("fs");
let files=["../f1.txt" , "../f2.txt" , "../f3.txt"]

// var i;
// for (i = 0; i < files.length; i++) {
//   fs.readFile(files[i],function(error,data){
//       console.log(data+"");
//   });
// }

let i=0;

function prin(i){
    if(i==files.length)
        return;
    let fKaPromise = fs.promises.readFile(files[i]);
    fKaPromise.then(function(data){
        console.log(data+"");
    });
    fKaPromise.catch(function(err){
        console.log(err);
    });
    prin(i+1);
}

prin(0);