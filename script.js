let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function() {
    let clear = document.querySelector(".clear");
    let equals = document.querySelector(".equals");
    let deleteLast = document.querySelector(".delete");
    let decimal = document.querySelector(".decimal");
    let changeSign = document.querySelector(".change-sign");
    
    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let previousScreen = document.querySelector(".previous-screen");
    let currentScreen = document.querySelector(".current-screen");

    numbers.forEach((number) => number.addEventListener('click', (e) => {
        handleNumber(e.target.textContent);
    }))

    operators.forEach((operator) => operator.addEventListener('click', (e) => {
        handleOperator(e.target.textContent);
    }))
})

    function handleNumber(num){
        console.log(num);
    }

    function handleOperator(operator) {
        console.log(operator);
    }
