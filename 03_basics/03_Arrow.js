const Arroww = {
    username :"Suj",
    price : "700",

     welcomeMessage : function(){
        console.log(`${this.username} , Welcome to my Website`);
        
    }

}
Arroww.welcomeMessage()

Arroww.username ="Sujit"
Arroww.welcomeMessage()

// (this) is used in program for the current context  like if we change our Username we can use (this.what you have to change in the program) 

function ch(){
    let username = "Sujit"
    console.log(this.username); // undefined
    

}
// ch()
// if we use this inside a function the output will be undefined

const gi = function(){
    let username = "Sujit"
    console.log(this.username); // undefined

}
// gi()


//Arrow function 

const Arrr = () => {
    let username = "Sujit"
    console.log(this); // undefined


}
// Arrr()

// Basic Arrow function || Explicite Arrow function 


// const multitwo = (num1,num2) => { // Basic Arrow Function 
    // return num1 * num2

// }
// console.log(multitwo(5,6));


// Implicite Arrow function 

const multitwo = (num1,num2) =>  num1 * num2 // Implicte Arrow function


console.log(multitwo(888888898766,6));


// *** ( {} ) when we use curly brackets we have to use return if we dont use {} then no need use return  we can use () like in above program




