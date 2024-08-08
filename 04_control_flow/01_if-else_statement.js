// if statement
if(3 != "3"){
    console.log("true");
}



// if else statement

if(3 != "3"){
    console.log("true");
}
else {
        console.log("Chala ja ");
}      




// if else statement within function 

(  function lelebhai  () {
if(3 != "3"){
    console.log("true");
}
else {
        console.log("Chala ja ");
}      
        
 }) ()


 // nesting in if - else statement
 
 const balance = 200000
 if(balance === 0 ){
    console.log("Insufficient balance");
    
 } else if(balance === 100){
    console.log("Sufficient balance");
    
 } else if(balance === 50000){
    console.log("your current  balance is equal 50000 ");

    
 } else {
    console.log("your current  balance is more than 100000");
    
 
 }

 // && statement in if-else statement

 const phone = true
 const phone_case = false
if(phone && phone_case){
   console.log("yes you bought both of them");
   

}else{
   console.log("No you only bought only one of them ");
   
}

