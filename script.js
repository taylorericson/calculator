let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function() {
    let clear = document.querySelector(".clear");
    let deleteLast = document.querySelector(".delete");
    let equals = document.querySelector(".equals");
    let decimal = document.querySelector(".decimal");
    
    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let previousScreen = document.querySelector(".previous-screen");
    let currentScreen = document.querySelector(".current-screen");

    numbers.forEach((number) => number.addEventListener('click', (e) => {
        handleNumber(e.target.textContent);
        currentScreen.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener('click', (e) => {
        handleOperator(e.target.textContent);
        previousScreen.textContent = `${previousValue} ${operator}`;
        currentScreen.textContent = currentValue;
    }))

    clear.addEventListener('click', () => {
        currentValue = '';
        previousValue = '';
        operator = '';
        currentScreen.textContent = '';
        previousScreen.textContent = '';
    })
})

    function handleNumber(num){
        if(currentValue.length <= 7) {
            currentValue += num;
        }
    }

    function handleOperator(op) {
        operator = op;
        previousValue = currentValue;
        currentValue = '';
    }

    function add(a,b) {
        return a + b;
    }

    function subtract(a,b) {
        return a - b;
    }

    function multiply(a,b) {
        return a * b;
    }

    function divide(a,b) {
        if(b === 0) {
            return "ERROR";
        }else {
            return a / b;
        }
    }
