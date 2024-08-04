// Date

const Mydate = new Date()

console.log(Mydate.toString());

console.log(Mydate.toDateString());

console.log(Mydate.toISOString());


console.log(Mydate.toJSON());

console.log(Mydate.toLocaleDateString());


console.log(Mydate.toLocaleString());

console.log(typeof Mydate);



const createdate = new Date (2024,7,4)

console.log(createdate.toDateString());
console.log(createdate.toJSON());


const myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000));


const neuDate = new Date()

console.log(neuDate.getHours());


neuDate.toLocaleString('default' , {
    weekday:"long",
})






