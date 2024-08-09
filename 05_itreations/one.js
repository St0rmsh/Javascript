//  basic for loops


for (let elem = 0; elem <= 10 ; elem++) {
    if(elem == 7){
       // console.log("7 thala for a reason");
        
    }
    const element = elem;
   // console.log(element);
    
    
}
// creating 1 to 10 table using for loop

for (let i = 0; i <= 10; i++) {
    // console.log(`outer value is ${i}`);
    
    
    
    for (let j = 0; j < 10; j++) {
        // console.log(`inner loop value ${j} and outer loop value ${i}`);
       // console.log(i + '*' + j + '=' + i*j  );
        
        
        
    }
    
}
// creating 1 to 20 table using for loop 

for (let i = 0; i <= 20; i++) {
    // console.log(`outer  val ${i}`);



    for (let j = 0; j <= 10; j++) {
        //console.log(i + '*' + j + '=' + i*j);
        
        
    }
    
    
}

//  Array  in for loop 

const myArray = ["Hulk","Ironman","Captain"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}



// break and continue


for (let index = 1; index <= 100; index++) {
    if (index == 7) {
        console.log(`7 Thala for a reason`);
        break
        
    }
    const element = index;
    console.log(element);
    
    
}




for (let index = 1; index <= 100; index++) {
    if (index == 7) {
        console.log(`7 Thala for a reason`);
        continue
        
    }
    const element = index;
    console.log(element);
    
    
}






