<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="sheet.css">
</head>
<body>
    <div id="sem">
        <h1>Guess a number</h1>
        <p>Try and guess a random number between 1 and 100.</p>
        <p>You have 10 attempts to guess the right number.</p>
        <form id="form">
            <label for="field" id="guess">Guess a number</label>
            <input type="text" id="field" class="field">
            <input type="submit" id="subt" class="guesssubmit" value="submit">

        </form>
        <div class="result">
            <p>Previous Guesses :<span class="guesses"></span></p>
            <p>Remaining Guesses : <span class="Result">10</span> </p>
            <p class="LoworHi"></p>
        </div>
    </div>
    <script src="control.js"></script>
    
</body>
</html>













====================================CSS=========================================


html{
    font-family: Arial, Helvetica, sans-serif;
}
body{
    background-color: #212121;
    color: #fff;
    width: 300px;
    max-width: 700px;
    min-width: 350px;
    margin: 0 auto;
    text-align: center;



}
.nav{
    margin: 5px 2px 2px 3px;
    padding: 3px;
}
.Result{
    padding: 7px;
    color: white;
}

.guesses{
    color: white;
    padding: 7px;
}
button{
    background-color: #141414;
    color: #fff;
    width: 250px;
    height: 50px;
    border-radius: 25px;
    font-size: 30px;
    border-style: none;
    margin-top: 30px;
    height: 200px;
}
#subt{
    background-color: #161616;
    color: #fff;
    width: 200px;
    height: 50px;
    margin: 15px 60px ;
    border-radius: 10px;
    font-size: 25px;
    border-style:none ;
}
#field{
    color: #000;
    width: 250px;
    height: 50px;
    border-style: none;
    font-size: 30px;
    margin-top: 20px;
    margin-left: 35px;
    border-radius: 30px;
    border: 4px solid #6c6d6d;
    text-align: center;
}
#guess{
    font-size: 45px;
    margin-top: 250px;
    color: #fff;
    
}
#gusses{
    background-color: #7a7a7a;
}
h1{
    background-color: #161616;
    color: white;
}
p{
    font-size: 16px;
    text-align: center;
    
}
#sem{
    box-sizing: border-box;
    width: 450px;
    height: 550px;
    background-color: #474747;
    color: #fff;
    font-size: 25px;
}



===============================Javascript==============================
let random = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#field');
const previous = document.querySelector('.guesses');
const result = document.querySelector('.Result');
const loworhi = document.querySelector('.LoworHi');
const startover = document.querySelector('.result');

const p = document.createElement('p');

let previousguess = [];
let numguess = 1;

let playgame = true;

if (playgame) {
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        
        validateguess(guess)


    })
    
}



function validateguess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
        
    } else if (guess < 1 )    {
        alert('Please enter a valid number')

    }else if (guess > 100 )    {
        alert('Please enter a number between 1 and 100')

    }else{
        previousguess.push(guess);
        if (numguess === 11) {
            displayguess(guess)
            displayMessage(`Game over :  Random number was ${random}`)
            endgame()
        }else{
            displayguess(guess)
            checkguesses(guess)

        }
    }
}
function checkguesses(guess) {
    if (guess === random) {
        displayMessage('you have gussed it right')
        
    }else if(guess > random){
        displayMessage('Number is too high')

    }else if(guess < random){
        displayMessage('Number is too low')
    }  if (random === 7 || random === 49 || random === 77 || random === 91) {
        displayMessage(' 7 :  Thala for a reason')
        
    }

    
}
function   displayguess (guess){
    userInput.value = '';
    previous.innerHTML += `${guess}, `
    numguess++;
    result.innerHTML = ` ${12 - numguess} `;



    
}
function displayMessage(message) {
    loworhi.innerHTML = `<h2>${message}</h2>`;
        
        
    

    
}

function endgame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = '<h2 id = newgame> Start new Game</h2>'
    startover.appendChild(p)
    playgame = false;
    newgame();


}
function newgame() {
    const newgamebutton = document.querySelector('#newgame')
    newgamebutton.addEventListener('click',function(e){
        random = parseInt(Math.random() * 100 + 1);
        previousguess = [];
        numguess = 1 ;
        previous.innerHTML = ''
        result.innerHTML = `${11- numguess}`;
        userInput.removeAttribute('disabled');
        startover.removeChild(p);

        playgame = true;

    })
    
}

