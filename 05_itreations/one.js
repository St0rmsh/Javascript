//  basic for loops


for (let elem = 0; elem <= 10 ; elem++) {
    if(elem == 7){
        console.log("7 thala for a reason");
        
    }
    const element = elem;
    console.log(element);
    
    
}
// creating 1 to 10 table using for loop

for (let i = 0; i <= 10; i++) {
    console.log(`outer value is ${i}`);
    
    
    
    for (let j = 0; j < 10; j++) {
        // console.log(`inner loop value ${j} and outer loop value ${i}`);
       // console.log(i + '*' + j + '=' + i*j  );
        
        
        
    }
    
}
// creating 1 to 20 table using for loop 

for (let i = 0; i <= 20; i++) {
    console.log(`outer  val ${i}`);



    for (let j = 0; j <= 10; j++) {
        console.log(i + '*' + j + '=' + i*j);
        
        
    }
    
    
}




