const valueBox = document.querySelector('.value-box');
const convert = document.querySelector('.convert');
const fromDistance = document.querySelector(".from");
const toDistance = document.querySelector(".to");
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

fromDistance.addEventListener('change', (event) => {
  resultFrom = `${event.target.value}`;
});

toDistance.addEventListener('change', (event) => {
  resultTo = `${event.target.value}`;
});

convert.addEventListener("click", getResults);

function getResults() {
  const units = new distance()
  if(isNaN(valueFrom)){
    return alert("Preencha os campos corretamente!");
  }
  if(resultFrom == undefined || resultFrom == '' || resultTo == undefined || resultTo == '' || valueFrom == 0) {
    return alert('Por favor preencha todos os campos');
  }
  if (resultTo == 'ANOLUZ' || resultFrom == 'ANOLUZ') {
    result.innerHTML = ((units[resultTo]/ units[resultFrom])* valueFrom).toFixed(20) + " ano-luz (aproximadamente)";
  } else {
    result.innerHTML = ((units[resultTo]/ units[resultFrom])* valueFrom).toFixed(6) + " " + resultTo;
  }
}

