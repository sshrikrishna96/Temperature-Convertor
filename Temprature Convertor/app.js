let celciusinput = document.querySelector('#Celcius > input')
let farhenheitinput = document.querySelector('#Farhenheit > input')
let kelvininput = document.querySelector('#Kelvin > input')

let btn = document.querySelector('.button button')

function roundNumber(number)
{
    return Math.round(number*100)/100
}

celciusinput.addEventListener('input' , function(){

    let cTemp = parseFloat(celciusinput.value)
    let fTemp = (cTemp*(9/5)) + 32
    let kTemp = cTemp + 273.15
    // if (x1 == "NaN") x1="Imag.!";
    // console.log(fTemp)
    farhenheitinput.value = roundNumber(fTemp)
    kelvininput.value = roundNumber(kTemp)
})
farhenheitinput.addEventListener('input' , function(){

    let fTemp = parseFloat(farhenheitinput.value)
    let cTemp = (fTemp-32)*(5/9)
    let kTemp = (fTemp-32)*(5/9)+273.15

    celciusinput.value = roundNumber(cTemp)
    kelvininput.value = roundNumber(kTemp)
})
kelvininput.addEventListener('input' , function(){

    let kTemp = parseFloat(kelvininput.value)
    let cTemp = kTemp-273.15
    let fTemp = (kTemp-273.15)*(9/5)+32

    celciusinput.value = roundNumber(cTemp)
    farhenheitinput.value = roundNumber(fTemp)
})

btn.addEventListener('click' , ()=>{
    celciusinput.value = ""
    farhenheitinput.value = ""
    kelvininput.value = ""
})