let fs=require("fs");
let files=["../f1.txt" , "../f2.txt" , "../f3.txt"];

let i=0;

function prin(i){
        if(i==files.length)
            return;
        let fKaPromise = fs.promises.readFile(files[i]);
        fKaPromise.then(function(data){
            console.log(data+"");
            prin(i+1);
        });
        fKaPromise.catch(function(err){
            console.log(err);
            prin(i+1);
        });
        
    
}

prin(0);