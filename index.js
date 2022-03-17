let count = 20
let countEl = document.getElementById("count-el").textContent = count
let meterEl = document.getElementById("meter-el")

function meterToFeet() {
    let sum = count * 3.281;
    meterEl.textContent = sum
}