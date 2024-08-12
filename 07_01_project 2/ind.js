function CalculateBMI() {
    const weight = document.getElementById("weight").value

    const height = document.getElementById("height").value

    const BMi = (weight / (height*height)*10000 )

    document.getElementById('BMI').innerHTML = BMi
    
}