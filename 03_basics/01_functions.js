function myname(){
    console.log("S");
    console.log("u");
    console.log("j");
    console.log("i");
    console.log("t");
    
}

myname // it is used for refernce
myname() // it is used for executing code


// Arguments

function adding(num1,num2){
    console.log(num1+num2);
    
}
adding() // NaN because no arguments are there 

adding(766,876) // here arguments are present

adding(65637,"6843568") // "" combines string and numbers

adding(4,undefined)

adding(6,null)

function num(number3,number4){
    return number3 + number4
}
const result = num(5,8)

// console.log("Result:" ,result);




function loggedin(username){
    if(!username){
        console.log("Please enter username");
        return
        
    }
    return `${username} loggedin to our server`
}

// const logged = loggedin("") // if statement is occur when there is no usrename
//console.log(logged);


function calculate_kart_price(...num7){
    return num7

}
console.log(calculate_kart_price(300,800,9000));



const user = {
    username : "Sujit",
    price : 499
}

function object(anyobject){
    console.log(`Username is ${anyobject.username} and the price ${anyobject.price}`);
    
}
object(user)