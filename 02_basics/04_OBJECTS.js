// const user = new object()

const newuser = {}

// console.log(newuser);

newuser.name = "Sujit",
newuser.email = "suji@gmail.com",
newuser.password = "1356"


// console.log(newuser);

const User = {
    email: "13757",
    Fullname :{
        Userfullname:{
            firstname:"sujit",
            lastname:"kumar"
        }
    }
}

// console.log(User);

 // console.log(User.Fullname);

// console.log(User.Fullname.Userfullname);


const alpha = {1:"a",2:"b"}
const beta = {3:"c",4:"d"}

// const gamma = Object.assign({},alpha,beta)
const gamma  = {...alpha,...beta} // Spread operator important eg : const ex = {...eg1,...eg2}
// console.log(gamma);





//console.log(Object.keys(User));
//console.log(Object.values(User));
//console.log(Object.entries(User));

//console.log(User.hasOwnProperty(`email`));// imp  

const Course = {
    coursename : "Javascript",
    courseprice : "799"
}

const {coursename: name} = Course // {before name: after name  } it changes the name or destructure 
console.log(name);

const {courseprice} = Course
console.log(courseprice);

