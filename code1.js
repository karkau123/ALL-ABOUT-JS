// console.log("Hello");

// 1 comments    -> //        or /* */

// 2 Data Types
  /*
     undefined
     null
     boolean
     string
     symbol
     number
     object
  */

 //  3 Variables
   /*
      var -> Will be usd throughout thr whole program
      let -> only in scope where variable is declared
      const -> variables that shoul never change
  */

// 4
 /*
     var a ;
     var b = 2 ;
 */


// 5    Summation
     /*
 var a , b , c;
 a = 2;
 b = 3;
 c = 2;
 console.log(a+b+c);
 */


 // variable names case sensitive

// 6 Float
 // var x = 2.00  


// 7 printing quotes using escape character

 /*
var str = "HEllo \"quotes\"";
console.log(str);                     => ANOTHER METHOD IS TO USE SINGLE QUOTES
 */

// ***   what if i want to use both quotes -> use backticks -> ` Write Anything Here    `


// 8 Escape Chracters
 /*
    \' --  single quote
    \"" -- Double quote
    \\ -- backslash
    \n -- newline
    \r --
    \t -- tab
    \b -- backspace
    \f -- 
 */

// concatentaio

 /*
var k = "hi";
var r = "hello";
console.log(k + " "+ r);
 */


// 9 append

// var s = "245";
// s.append("3");         => Wrong no append method
// console.log(s);


// 10  length
// name.length;

// 11 string immutability

 /*
  var s = "hello";
  s[0] = "h"  =? can not change a single character
 */

//12 Array
 //  **** In JS  an array can hold elements of diff data types also
 // []  -> braces for array

 /*
 var a= ["hello" , 39 , "kg" ];
 console.log(a[1]);
 */

 // 13 Nested Array

  // var x = [ [a ,2] , [b , 6] ];

  
// 14   push  ans pop  in array

// var arr = ["roshni" , "kartikeya" , 12];
// console.log(arr[2]);
// arr.push("Hello");
// console.log(arr[3]);
// arr.pop();
// console.log(arr.length)


//15  shift
// removes first element

//  16 unshift   pushes element in front


// 17 FUNCTIONS

// function hey ()
// {
//    console.log("Hello Roshu");

// }


//  18
// hey();

// function sum ( a ,  b)
// {
//       console.log(a*b);
// }
// sum( "Roshu" , 2);


// scope - Global and Local

// var x = 10;
// function sum ( a ,  b)
// {
//       console.log(a*b + x );
// }
// sum (2 , 3)

// 20

// return a value from function

// function minus ( a, b)
// {
//     return  a-b;
// }
 
// console.log(minus(3 , 22));

 // 21 build javascript objects
//****  USE OBJECTS TO STORE AS KEY VALUE PAIR
//  var dog = {
//     "Name" : "pillu",
//     "legs" : 4 ,
//     "tails" : 1 
//  };
// console.log(dog.Name);  -  access object with dot 
//  console.log(dog["Name"]);  - access object with braces -> use this when name string ha spaces

//22 Updaing object properties

// dog.Name = "kati";
// console.log(dog.Name);


// 23 Delete properties from obejects
// delete(dog.legs);
// console.log(dog.legs);



// 24 using if else and check if the property is present in the object or not
//*** hasOwnProperty
// var dog = {
//    "Name" : "pillu",
//    "legs" : 4,
//    "tails" : 1 
// };

// if (dog.hasOwnProperty("legs")) { // "legs" as a string
//      console.log(1);
// } else {
//    console.log(0);
// }

// A Javascript object is used to store flexible Data

// 25 RECORD COLLECTION

/*
JSON stands for JavaScript Object Notation
JSON is a lightweight data-interchange format
JSON is plain text written in JavaScript object notation
JSON is used to send data between computers
JSON is language independent
*/


// json.parse   ->  json strings to javascript objects
// json.stringify -> objects to json strings

// loops same as c++


// objcts are stored in a curly brace

// const dogs = [
//    {
//        name: "Pillu",
//        legs: 4,
//        tails: 1,
//        breed: "Labrador"
//    },
//    {
//        name: "Tommy",
//        legs: 4,
//        tails: 1,
//        breed: "Beagle"
//    },
//    {
//        name: "Bruno",
//        legs: 4,
//        tails: 1,
//        breed: "Bulldog"
//    }
// ];

// function lookup (name1 , prop)
// {
//       for (var i=0 ; i<dogs.length;i++)
//       {
//            if (dogs[i].name == name1)  
//            {
//                return dogs[i][prop];
//            }
//       }
//       return "DOG NOT FOUND";
// }

// console.log(lookup("Bruno" , "legs" ));


// 26 string to int
// s = "234";
// var x =  parseInt(s);
// console.log(x+1);

// 27 string to int with base , Default base is base 10
// s = "101";
// var x =  parseInt(s , 2);
// console.log(x+1);

// 27 ternary 

// function check (a , b)
// {
//     return a==b ? true : false;
// }

// console.log(check(1 , 1));


// 28 Declare a Read only variable with constb keyword


// 29 use arrow to write concise aonymuous function

// const magic =  () =>   new Date();
 
// var ans = function(a, b) {
//    return a + b;
// };
// console.log(ans(3, 4)); 

// /*** 
//  var ans = (a , b) => a+b;
//  console.log(ans(2 , 3));

// const inc = (function(){return function inc(number , val = 1){
//    return number + val;
// }});

// In the above fun ig two parameters are passed then then the value of val wil 
// be the value you entered else it will be default 1

// 30 Rest OPerator ...args
/*
The ...args syntax in JavaScript is used as a rest parameter to collect all 
remaining arguments into a single array. It is particularly useful 
in functions when you don’t know the
 exact number of arguments in advance.

function sum(...args) {
    return args.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4));  // Output: 10
console.log(sum(5, 10));       // Output: 15
console.log(sum());            // Output: 0


*/


// spread operator -> spreads out the contents of an array into individual

//31 destructuring assignment

// const person = (name , age , gender) => ({name , age , gender});
// console.log(person("Roshni" , 12 , "Female"));


//32
// new keyword
// var name = function(pname)
// {
//     this.pname = pname;
// }
// var x = new name('ROSHU');
// console.log(x.pname);

//33
// class name {
//     constructor(pname)
//     {
//         this.pname = pname; 
//     }
// }
// var x = new name("roshni");
// console.log (x.pname);

// 34 import and require  => See syntax

// import cap from "./sum_function";
// const x =  cap("hey");
// console.log(x);