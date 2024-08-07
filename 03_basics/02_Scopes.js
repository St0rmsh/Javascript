// Scopes

let ski = 5 // Global variable


if(true) { // block scope
    let ski = 9
    const kia =6
    var hi = 2
    // console.log(`Block scope:${ski}`); //   local var
    
}
// console.log(ski);
// console.log(kia);


// Nested scope

function User(){
    let Username = "Sujit"

    function Usere(){
        let website = "Github"
        console.log(Username);

        
    }
    // console.log(website);
   // Usere()
    
    
    
}
User()

if(true){

    const  username = "Sujit"
    if(username === "Sujit"){
        const website ="Github"
        // console.log(`yourname is ${username} and the website is ${website}`);
        

    }

}


//-------------------------Interseting--------------------------------------------------

console.log(Addon(4)); // this will execute because this is a function
function Addon(num){ // this is a Function
    return num +1
}



console.log(Addtwo); // this will not execute because this is an expression 

const Addtwo = function(num1){  // Expression const Addtwo = function(num1)
    return num+2
}

// * Note In function we can console.log a function anywhere in the same program where as in Expression the console.log should be in the Expression