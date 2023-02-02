const api = "https://api.exchangerate-api.com/v4/latest/USD";

const valueBox = document.querySelector('.value-box');
const convert = document.querySelector('.convert');
const fromCurrecy = document.querySelector(".from");
const toCurrecy = document.querySelector(".to");
const result = document.querySelector('.result');
// const amount = document.getElementById('amount');
let valueFrom ;
let resultFrom ; 
let resultTo ;

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
    fetch(api)
        .then(currency => {
            return currency.json();
        }).then(displayResults)
        .catch(function(){
          alert('erro')
        })
        
}

function displayResults(currency) {
    let fromRate = currency.rates[resultFrom];
    let toRate = currency.rates[resultTo];
    result.innerHTML = 
       ((toRate / fromRate) * valueFrom).toFixed(2);
}
// when user click on reset button
// function clearValue() {
//     window.location.reload();
//     document.getElementsByClassName(".result").innerHTML = "";
// };


// let valorEmReal = (valorEmDolar * cotacaoDoDolar).toFixed(2);
