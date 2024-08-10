// const lang = ["js","c","c++","py"]

// const pro = lang.forEach( (item) => {
  //  console.log(item);
    
// } )

// console.log( pro);


// Filter is used to filter out names or numbers like the case below

const nums = [1,2,4,64,7,7,9,6,,95,]
 // const numbs = nums.filter( (num) => { // <= here are {}
   //  return num > 90 // while using function and filter if we have {}/ scope {} are also knows as Scope in functions  and inside these you write conditions then before the conditons we have to write   return    
  
    // or we can write this way

  
    // const numbs = nums.filter( (num) => ( num >4 )
 // }
    
 // )

// Filtering numbers using forEach
 const newnums = []

 nums.forEach( (nu) => {
    if (nu > 4) {
        newnums.push(nu);
        
        
    }
 } )

  console.log(newnums);




  





