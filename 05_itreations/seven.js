const nums = [1,4,5,6,2,5,3,3,5,]
// const newnums = nums.map( (ne) => ne + 10 )
// console.log(newnums);


// Chanining is a method where we an use map and filter function multiple times and we can use both of them


const newnums = nums.map((nums) => nums *99 ) 
  .map((nums) => nums +2)
 . filter( (nums) => nums >= 70)
 console.log(newnums);
 



 