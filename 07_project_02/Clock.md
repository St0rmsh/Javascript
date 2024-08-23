<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Clock</title>
    <link rel="stylesheet" href="clock.css">
</head>
<body class="Clock">
    c
    <div class="center">
    <div id ="banner"><span> Your current time is </span></div>
    <div id="clock"></div>
    

    </div>
    <script src="clock.js"></script>
</body>
</html>






=========================CSS=======================

.center{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 200px 0px 0px 0px;
    flex-direction: column;

}
#clock{
    font-size: larger;
    background-color: orange;
    padding: 20px 20px 20px 30px;
    margin-top: 19px;
    border-radius: 12px;

}

.Clock{
    background-color: #212121;
    color: #fff;
}

=========================Javascript============================
const clock = document.getElementById('clock')


setInterval(function(){
    let date = new Date()
     // console.log(date.toLocaleTimeString());
     clock.innerHTML = date.toLocaleTimeString();
}, 1000)

