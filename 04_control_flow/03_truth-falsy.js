const useremail = ""
if (useremail) {
    console.log("welocme");
    
    
}else{
    console.log("Access denied");
    
}
// Some values are thruthy and some values are falsy

// falsy values

// NaN, 0 , -0, null , undefined, false , "" , Bigint 0n

// thruthy value

// {} , "0" , 'false' , " " , [] , {} , function() {}

// Cheacking if emp is empty or not in Array

if(useremail.length === 0){
    console.log("Array is empty");
    
}


// Cheacking if emp is empty or not in object

const emp = "Sujit"
if(Object.keys(emp).length === 0) {
    console.log("empty");
    
}else{
    console.log("it is not empty");
    
}

// Nullish coalescing operator (??) null , undefined

let val1
let val2
val1 = 8 ?? 10
val2 = 7 ?? undefined

console.log(val1);
console.log(val2);



// terniary operator (?)

const price = 100
price <= 200 ? console.log("less then 200"): console.log("more then 200");



