const Marvel = ["Ironman","Spiderman","Sracletwitch"]

const DC = ["Batman ", "Superman","Flash"]

//Marvel.push(DC)

// console.log(Marvel);
// console.log(Marvel[3][0]);

// const all = Marvel.concat(DC)

// console.log(all);


const all_new = [...Marvel,...DC]
console.log(all_new);


const newArray = [1,2,3,[4,5,6],7,8,9,[6,3,5],9,4,6]

const neuArray = newArray.flat(4)

console.log(newArray);

console.log(neuArray);


console.log(Array.isArray("sujit"));
console.log(Array.from("Suit"));
console.log(Array.from({name:"Sujit"}));


// converting nums into String

const num1 = 1000
const num2 = 2000
const num3 = 4000

console.log(Array.of(num1,num2,num3));







