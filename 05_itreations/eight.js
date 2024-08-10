// reduced function 
const val = [1,2,3,8]

const v = val.reduce( function (acc, curr) {
    console.log(`acc ${acc} and curr ${curr}`);
    
    return acc * curr
},99) // <= the value (99) can be changed according to need
console.log(v);

// output
// acc 99 and curr 1
// acc 100 and curr 2
// acc 102 and curr 3
// acc 105 and curr 8
// 113


const cart = [
    {
        course : "js",
        price : 300
    },
    {
        course : "java",
        price : 3000
    },
    {
        course : "php",
        price : 30
    }
]
const total = cart.reduce((acc ,item) => acc + item.price,0 )

console.log(total);

