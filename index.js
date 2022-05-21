// javascript
convert ()

function convert(){
    
    let numberEl=document.getElementById("numberStat")
console.log(numberEl)


let lengthEl=document.getElementById("length-el")
let volEl=document.getElementById("volume-el")
let massEl=document.getElementById("mass-el")

//1m=3.3ft    1l=0.26 gallon  1kg=2.2pounds//

let yourNumber=document.getElementById("yourNumber").value

let number = ""
numberEl.innerText=number

//Meter to feet//
let meterToFeet =yourNumber*3.3
meterToFeet=meterToFeet.toFixed(3)
console.log(meterToFeet)
let feetToMeter = yourNumber/3.3
feetToMeter=feetToMeter.toFixed(3)
console.log(feetToMeter)

   lengthEl.textContent=yourNumber + " meters = " + meterToFeet + " ft" + " I " + yourNumber + " ft = " + feetToMeter + " meters "

//Liter to gallon//

let literToGallon=yourNumber*0.26
literToGallon=literToGallon.toFixed(3)
console.log(literToGallon)
let gallonToLiter=yourNumber*3.785
gallonToLiter=gallonToLiter.toFixed(3)
console.log(gallonToLiter)

   volEl.textContent=yourNumber+" liters = " + literToGallon + " gallons " + " I " + yourNumber + " gallons = " + gallonToLiter + " liters "
//Kilos to pounds//

let kiloToPound=yourNumber*2.2
kiloToPound=kiloToPound.toFixed(3)
console.log(kiloToPound)
let poundToKilo=yourNumber/2.2
poundToKilo=poundToKilo.toFixed(3)
console.log(poundToKilo)


   massEl.textContent=yourNumber + " kilos = " + kiloToPound + " pounds " + " I " + yourNumber + " pounds = " + poundToKilo + " kilos "

    
    
    
    
    
    
    yourNumber=document.getElementById("yourNumber").value
    console.log(yourNumber + "yourNumber")
}

