c<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change the color</title>
    
</head>
<body>
    <div class="Color-change">
        <span class ="button" id = "grey"></span>
        <span class="button" id = "red"></span>
        <span class="button" id = "blue"></span>
        <span class="button" id = "green"></span>
        <span class="button" id = "white"></span>
    </div>    

    <div class = "color">
        <h2>Try to change the color 
          <span>try to change the color by clicking above</span>
        </h2>

        


    </div>
    
    
    
</body>
</html>



=======================================CSS==================================================


.html{
    margin: 0px;
}

.color{
    text-align: center;
    margin: 140px auto 140px;
}

.Color-change{
    margin: 100px auto 100px;
    text-align: center;
    width: 80px;

}
span{
    display: block;
}


.button {
    width: 100px;
    height: 100px;
    display: inline-block;
    border: 4px solid black;
    padding: 20px;
    
}
#grey{
    background-color: grey;
}
#red{
    background-color: red;

}
#blue{
    background-color: blue;
}
#green{
    background-color: green;
}
#white{
    background-color: white;
}



