let fs=require("fs");

let extensions= require("./extensions"); 
// console.log(extensions);
let testfolderPath="./download";
let tfolderPath = "./download";
let contents=fs.readdirSync(testfolderPath);
// console.log(contents);

let i=0;

function Sort(i,folder){
    if(i==folder.length)
    {
       if(tfolderPath.localeCompare(testfolderPath)!=0){
            fs.rmdirSync(tfolderPath, { recursive: true });
       }
       tfolderPath=tfolderPath.substring(0,tfolderPath.lastIndexOf('/'));
       return;
    }
    let file=folder[i];
    let ext=file.split(".");
    if(ext.length==2)
    {
        sortFile(file);
    }
    else
    {
        if(isSorted(file)==false){
            tfolderPath+="/" + file;
            let innerFolder=fs.readdirSync(tfolderPath);
            Sort(0,innerFolder);
        }         
    }
    Sort(i+1,folder);
}
Sort(i,contents);

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
    let source=tfolderPath+"/"+file;
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

function isSorted(file){
    for(let key in extensions){
        if(key.localeCompare(file)==0){
            return true;
        }
    }
    return false;
}