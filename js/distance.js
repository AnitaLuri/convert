const valueBox = document.querySelector('.value-box');
const convert = document.querySelector('.convert');
const fromCurrecy = document.querySelector(".from");
const toCurrecy = document.querySelector(".to");
const result = document.querySelector('.value-result');
let valueFrom ;
let resultFrom ; 
let resultTo ;

class distance {
  constructor() {
    this.mm = 1000000;
    this.cm = 100000;
    this.m = 1000;
    this.Km = 1;
    this.in = 39370.1;
    this.ft = 3280.84;
    this.yd = 1093.61;
    this.mi = 0.6213711922;
    this.ANOLUZ = 0.0000000000001057;
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
  const units = new distance()
  if (resultTo == 'ANOLUZ' || resultFrom == 'ANOLUZ') {
    result.innerHTML = ((units[resultTo]/ units[resultFrom])* valueFrom).toFixed(20) + " ano-luz (aproximadamente)";
  } else {
    result.innerHTML = ((units[resultTo]/ units[resultFrom])* valueFrom).toFixed(6) + " " + resultTo;
  }
}

