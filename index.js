// 0 meters = 0.000 feet | 0 feet = 0.00 meters
// 0 liters = 0.000 gallons | 0 gallons = 0.00 liters
// 0 kilos = 0.00 pounds | 0 pounds = 0.000 kilos

let number = 20
let numberEl = document.getElementById("number-el").textContent = number
let meterEl = document.getElementById("meter-el")
// console.log(meterEl)

function meterToFeet() {
    let sum = numberEl * 3.281
    meterEl.textContent = "20 meters = " + sum.toFixed(3) + " feet | "
}

function feetToMeter() {
    let sum = numberEl / 3.281
    meterEl = "20 feet = " + sum.toFixed(3) + " meters"
}

function litersToGallons() {}

function gallonsToLiters() {}

function kilosToPounds() {}

function poundsToKilos() {}