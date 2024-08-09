// Object is written in forin loop 

const myObject = {
    js : "Javascript",
    cpp : "C++",
    rb: "Ruby"
}
for (const key in myObject) {
    console.log(`${key} are the shortcuts for ${myObject[key]}`);
    
    
}





const myArray = ["array","Destructor","constructor"]
for (const key in myArray) {
    console.log(myArray[key]);
    
    
}

