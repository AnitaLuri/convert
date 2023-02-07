const valueBox = document.querySelector('.value-box');
const convert = document.querySelector('.convert');
const fromTemperature = document.querySelector(".from");
const toTemperature = document.querySelector(".to");
const result = document.querySelector('.result');
let valueFrom ;
let resultFrom ; 
let resultTo ;

valueBox.addEventListener('input', updateValue);
function updateValue(event) {
  event.preventDefault();
  valueFrom = valueBox.value;
}

fromTemperature.addEventListener('change', (event) => {
  resultFrom = `${event.target.value}`;
});

toTemperature.addEventListener('change', (event) => {
  resultTo = `${event.target.value}`;
});

convert.addEventListener("click", getResults);

function getResults() {
  if(isNaN(valueFrom)){
    return alert("Preencha os campos corretamente!");
  }
  if(resultFrom == undefined || resultFrom == '' || resultTo == undefined || resultTo == '' || valueFrom == undefined ) {
    return alert('Por favor preencha todos os campos');
  }
  if( resultFrom == 'C' && resultTo == 'K') {
    result.innerHTML = (Number(valueFrom) + 273.15).toFixed(2) + " " + resultTo;
  } else if(resultFrom == 'K' && resultTo == 'C') {
    result.innerHTML = (Number(valueFrom) - 273.15).toFixed(2) + " " + resultTo;
  } else if(resultFrom == 'K' && resultTo == 'F') {
    result.innerHTML = (((Number(valueFrom)-273)* 1.8)+32).toFixed(2) + " " + resultTo;
  } else if(resultFrom == 'F' && resultTo == 'K') {
    result.innerHTML = ((Number(valueFrom)-32)*(5/9)+273).toFixed(2) + " " + resultTo;
  } else if(resultFrom == 'C' && resultTo == 'F') {
    result.innerHTML = ((Number(valueFrom)*1.8)+32).toFixed(2) + " " + resultTo;
  } else if(resultFrom == 'F' && resultTo == 'C'){
    result.innerHTML = ((Number(valueFrom)-32)/ 1.8).toFixed(2) + " " + resultTo;
  } else if(resultFrom == resultTo) {
    result.innerHTML = valueFrom + " " + resultTo;
  }
}