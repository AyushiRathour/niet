//left to right compile
// left to right

//cout
//system.out.println();

// console.log("hello world");


//JS data type
//Number,Boolean,String, undefined, Object(Array,object)


//declaration and initialization of variable

//ES6 syntax=> let and const

// block scoped



if(true){
    let a=10;
}

// console.log(a);  Not defined  Reference error

let a;  // it takes undefined
// console.log(a);

a=100;
if(true){
     let a=200;   // if let then 100 outside otherwise 200 outside
    // console.log(a);
}
// console.log(a);

//const=> block scoped and constant

const pi=3.14;
// console.log(pi);


// pi=200    typeError/ Assignment to a const variable



let b="ffdfg";
let c=true;
let s=2.483;
let f=undefined;

//Non primitive=> Objects arrays

// Arrays=> dynamic

let movies=["The winter soldier","Money Heist",89,4321,"n"];
// console.log(movies);
//push,pop,unshift,shift,splice

// console.log(movies[2]);
movies.pop();   //delete from end
movies.push("the endgame");  //append from end
// console.log(movies);

movies.unshift("The first avenger");  //append ata start of the array
// console.log(movies);

movies.splice(2,1);  //2nd index se 1 element delete hogr
// movies[100]=" find me";
// console.log(movies);

// let movi[];  // new array();

//object=> key values ka pair
// int avenger={};  //new object();

//keys are always unique
//values may be duplicate
let avenger={
    "name":"steve",
    place:"Queens",
    skills:[
        "Martial Arts",
        "Taekwondo",{
        Bestfriend:[
            {name:"Bucky", skills:[]},
            {name:"Natasha",skills:["Fighting"]},
        ],
      }
   ],
    movies:["The first avenger","Winter Soldier"],
    age:150
};

//dot notation=> literal check
console.log(avenger.place);
console.log(avenger.movies);

//avenger["skills"];

//bracket notation
let key="age";
console.log(avenger.key);
console.log(avenger.skills[2]["Bestfriend"][1].skills[0].substring(4));


