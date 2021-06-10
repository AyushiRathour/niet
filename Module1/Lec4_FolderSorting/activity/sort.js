let fs=require("fs");

let extensions= require("./exensions");

let testfolderPath="./Test folder";

let contents=fs.readdirSync(testfolderPath);
// console.log(contents);

for(let i=0;i<contents.length;i++){
    let file=contents[i];
    sortFile(file);
}


function sortFile (file){
    let ext= file.split(".")[1];
    let folder=getFolder(ext);
    // console.log(folder);/
    let folderPath=testfolderPath + "/" + folder; 
    if(!fs.existsSync(folderPath)){
        // folder does'nt exists
        //create folder
        fs.mkdirSync(folderPath);
    }

    //move file
    //copy file
    let source=testfolderPath+"/"+file;
    let dest=folderPath+"/"+file;
    fs.copyFileSync(source,dest);
    //delete file
    fs.unlinkSync(source);


}

function getFolder(ext){

    //for in loop
    for(let key in extensions){
         if(extensions[key].includes(ext)){
            return key;
         }
    }
}