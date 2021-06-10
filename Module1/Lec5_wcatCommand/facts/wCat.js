// console.log("hello");
let input = process.argv.slice(2);

let fs=require("fs");


let files=[];
let flags=[];

for(let i=0;i<input.length;i++)
{
    if(input[i].startsWith("-")){
        flags.push(input[i]);
    }
    else{
        files.push(input[i]);
    }
}

// console.log(files);
// console.log(flags);

let data="";
for(let i=0;i<files.length;i++){
     let fileData=fs.readFileSync(files[i]);
     data+=i==files.length-1?fileData : fileData+"\n";
}
// console.log(data);

//-s flag

function applySFlag(){
    let dataComp=data.split("\r\n");
    let sFlag=[];
    let nonEmptyFound=false;
    for(let i=0;i<dataComp.length;i++){
        if(dataComp[i]!=""){
           sFlag.push(dataComp[i]+.);
           nonEmptyFound =true;
        }
        else if(dataComp[i]==''&& dataComp[i-1]!=''&& nonEmptyFound){
            sFlag.push(dataComp[i]);
        }
    }
    let sFlagString=sFlag.join("\r\n");
    return sFlagString;
    
}

data=applySFlag();
console.log(data);

//-n flag