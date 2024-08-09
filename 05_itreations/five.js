// for each loop

const arr = ["js","cpp","c","php","java"]
arr.forEach( function (lang){
   // console.log(lang);
    


}
    
)

// using arrow function


arr.forEach( (lang, index,Array)=> {
    console.log(lang,index,Array);
    

})


const mycoding = [
    {
        Language_name : "Javascript",
        languagefilename : "js",
    },
    {
        Language_name: "Java",
        languagefilename : "java",
    },
    {
        Language_name : "python",
        languagefilename : "py",
    },
]
mycoding.forEach( (item)=> {
    console.log(item.Language_name);
    
    
});

