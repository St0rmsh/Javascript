// objects literal


const mysym = Symbol("mykey1")

const JsUser = {
    name : "Sujit" ,
    "Fullname" : "Sujit Kumar",
    email : "suji@email.com",
    [mysym] : "mykey1",
    age : 20
}

// console.log(JsUser.Fullname);
// console.log(JsUser[mysym]);
// console.log(JsUser["email"]);
//console.log(JsUser.age);

// console.log( typeof JsUser.mysym);



JsUser.email = "hdfytuyh@email"
// Object.freeze(JsUser)
// console.log(JsUser);


JsUser.greeting = function (){
    console.log("hello ");
    


    
}

JsUser.greetingtwo = function(){
    console.log(`hello User , ${this.name}`);
    
}
    


console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());




    
