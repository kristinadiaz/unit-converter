let numberEl = prompt('Please enter a number: ');
document.getElementById('number-el').textContent = numberEl;

let lengthEl = document.getElementById('length-el');
let volumeEl = document.getElementById('volume-el');
let massEl = document.getElementById('mass-el');

function length() {
    let feet = numberEl * 3.281;
    let meter = numberEl / 3.281;
    lengthEl.textContent = `${numberEl} meters = ${feet.toFixed(3)} feet | ${numberEl} feet = ${meter.toFixed(3)} meters`;
};

function volume() {
    let liters = numberEl / 3.785;
    let gallons = numberEl * 3.785;
    volumeEl.textContent = `${numberEl} liters = ${gallons.toFixed(3)} | ${numberEl} gallons = ${liters.toFixed(3)} liters`;
};

function mass() {
    // kilos to pounds
    // pounds to kilos
};

length();
volume();