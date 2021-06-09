//function body
function callMe( name){
    console.log("Call me function called!!")
    console.log(name+ " Says Hiiii!!!!!!!!!!!!")
    return 10;
}
//function invocation

console.log(callMe);  

console.log(callMe());   //undefined bcoz no return value
//no differnce in functions and variables
callMe("steve");   //callme can be called anywhere even before the function

//func can be passed as a argument in a func and also they can be returned from the func just like variables


// let sayHi;   //undefined

let sayHi=function(){
      console.log("Function says Hiii!!");

}

sayHi();    //sayHi can be called only after the function
