const button = document.querySelectorAll('.button')
const body = document.querySelector('body')

button.forEach( function (button){
    console.log(button);
    button.addEventListener('click' , function (n) {
        console.log(n);
        console.log(n.target);

        
        if ( n.target.id === 'grey' ) {
            body.style.backgroundColor =' grey'
            
        }
        if ( n.target.id === 'red' ) {
            body.style.backgroundColor =' red'
            
        }
        if ( n.target.id === 'blue' ) {
            body.style.backgroundColor =' blue'
            
        }
        if ( n.target.id === 'green' ) {
            body.style.backgroundColor =' green'
            
        }
        if ( n.target.id === 'white' ) {
            body.style.backgroundColor =' white'
            
        }
        
        

        
    })
    
} )