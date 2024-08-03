// Primitive datatypes / call by me datatype

// 7 types : String , Null , Undefined , Number , Boolean , Symbol , Bigint

// String
const name = "Sujit"

//Null
const val = null
console.log(val);

// Undefined

let address;
console.log(address);

//Number
const Num = 1234
console.log(Num);


//Boolean
const IsloggedIn = true
console.log(IsloggedIn);

// Symbol

const sym = Symbol("579")
const ym = Symbol("579")
 console.log(sym === ym);










// Non - Primitive / reference

// Array, Obejects ,Functions


// Array
const myarr = ["sk","dk","sk","ak","ak"];
console.log(myarr);


// object
/* let myObj = {
    name = "sujit",
    age = 20,
}  */


// Functions

const myfunction = function(){
    console.log("Hii");
    
}



// +++++++++++++++++++++++++++++++++++++++

// Stack (Primitive datatype), Heap (Non Primitive)

//stack 




let nam = "Storm"
let fullname = nam
fullname = "Shadow"

console.log(fullname);
console.log(nam);

// Data which are stored in Primitive datatype / Stack always gives copy or  changes which are done in a copy of the file

// Heap 
 let userone = {
    
    email : "user@google.com",
 
 } 

 let usertwo =  userone

 usertwo.email = "Sujit@google.com",

 console.log(userone.email);
 console.log(usertwo.email);
 
// data which are stored in Non-primitive /heap uses call by Reference or the changes which are done in original file
 


 


