// Immediately Invoked Function Expression

// usually iife is used  in program to protect code from the pollution of global variable


// iife code is written inside () and when one iife code ends before writing second iife code we have to end 1st iife code with ;

//  for example 

(function guy(){
    // named iife because function name is guy
    console.log("Sujit");
    
}) (); // () here this is used for execution of this code 


// we can also use arrow function here

// for example

(  () => {
    
    console.log("MIke");
    
} )() ;



( (name) => {
    // simple iife because no function name 
    console.log(`Hii master ${name}`);
    
}) (`Sujit kumar`)

