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

    equals.addEventListener('click', () => {
        if(currentValue != '' && previousValue != '') {
            operate();
        
            previousScreen.textContent = '';
            if(previousValue.length <= 14) {
                currentScreen.textContent = previousValue;
            } else {
                currentScreen.textContent = previousValue.slice(0,11) + "...";
            }
        }           
    })

    deleteLast.addEventListener('click', () => {
        currentValue = currentValue.slice(0,-1);
        currentScreen.textContent = currentValue;
    })

    decimal.addEventListener('click', () => {
        handleDecimal();
        currentScreen.textContent = currentValue;
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

    function handleDecimal() {
        if(!currentValue.includes('.')) {
            currentValue += ".";
        }
    }

    function operate() {
        previousValue = Number(previousValue);
        currentValue = Number(currentValue);

        if(operator === '/') {
            if(currentValue != 0) {
                previousValue /= currentValue;
            } else {
                previousValue = "Error";
            }
            
        } else if(operator === 'x') {
            previousValue *= currentValue;
        } else if(operator === '-') {
            previousValue -= currentValue;
        } else if(operator === '+') {
            previousValue += currentValue;
        } 
        
        previousValue = round(previousValue);
        previousValue = previousValue.toString();
        currentValue = previousValue.toString();
    }

    function round(num) {
        return Math.round(num * 1000) / 1000;
    }
