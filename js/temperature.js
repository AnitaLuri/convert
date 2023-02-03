const valueBox = document.querySelector('.value-box');
const convert = document.querySelector('.convert');
const fromCurrecy = document.querySelector(".from");
const toCurrecy = document.querySelector(".to");
const result = document.querySelector('.result');
let valueFrom ;
let resultFrom ; 
let resultTo ;

class temperature {
  constructor() {
    this.K = 274.15;
    this.C = 1;
    this.F = 33.8;
    this.R = 0.8;
    this.RA = 493.47;
  }
}

valueBox.addEventListener('input', updateValue);
function updateValue(event) {
  event.preventDefault();
  valueFrom = valueBox.value;
}

fromCurrecy.addEventListener('change', (event) => {
  resultFrom = `${event.target.value}`;
});

toCurrecy.addEventListener('change', (event) => {
  resultTo = `${event.target.value}`;
});

convert.addEventListener("click", getResults);

function getResults() {
  const value = new temperature()

  result.innerHTML = ((value[resultTo]/ value[resultFrom])* valueFrom).toFixed(2) + " " + resultTo;
}