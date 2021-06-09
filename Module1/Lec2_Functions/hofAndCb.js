//high order func
//they accept func as a parameter

//callback func
//these are passed as an argument in hof

function getFirstName(fullname){
    //"steve Rogers"
    //split function
    fullname=fullname.split(" ");
    //["Steve","Rogers"]
    return fullname[0];
}

function getLastName(fullname){
    fullname=fullname.split(" ");
    return fullname[1];
}

function sayHii(fullname,fun){
    
}