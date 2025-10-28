// variables to hold states
let displayValue = '0';
let firstNumber = null;
let operator = null;
let calculationFinished = false;

// get all required html elements
const display = document.querySelector('.display-value');
const digits = document.querySelectorAll('.digits');
const operators = document.querySelectorAll('.operators');
const equal = document.getElementById('equals');
const clear = document.getElementById('clear');
const dot = document.getElementById('dot');

// update display accordingly as per button digits 
digits.forEach(digit => {
    digit.addEventListener('click', (event) => {

        // check if equals is already used for result
        if (calculationFinished === true) {
            displayValue = event.target.textContent;
            calculationFinished = false;
        }

        // if displayValue is zero update it to clicked digit
        else if (displayValue === '0') {
            displayValue = event.target.textContent;
        }

        // if displayValue is not zero concatenate the selected digit to displayValue
        else {
            displayValue += event.target.textContent;
        }

        // update the display div
        display.textContent = displayValue;
    });
});

// when user inputs an operator
operators.forEach((operatorButton) => {
    operatorButton.addEventListener('click', (event) => {

        // check if firstNumber and operator is not null (chaining)
        if (firstNumber !== null && operator !== null) {
            let secondNumber = displayValue;

            // parse operands
            firstNumber = parseFloat(firstNumber);
            secondNumber = parseFloat(secondNumber);

            // calculate result and update displayValue
            displayValue = operate(operator, firstNumber, secondNumber).toString();

        }

        // the user has finished typing first number
        firstNumber = displayValue;
        
        // store the operator selected
        operator = event.target.textContent;

        // update the display div to 0
        displayValue = '0';
        display.textContent = displayValue;
    });
});

// when user inputs equal calculate result and display it
equal.addEventListener('click', () => {

    // check if user inputs "=" too early
    if (operator == null || firstNumber == null) {
        return;
    }

    // store the secondNumber value from displayValue
    let secondNumber = displayValue;
    
    // parse string values of firstNumber and secondNumber
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

    // calculate and return result
    displayValue = operate(operator, firstNumber, secondNumber).toString();

    // update display div
    display.textContent = displayValue;

    // equals is the last action
    calculationFinished = true;

    // reset firstNumber and operator
    firstNumber = null;
    operator = null;
    
});

// when user input AC
clear.addEventListener('click', () => {

    // reset all the variables
    firstNumber = null;
    displayValue = '0';
    operator = null;

    // update the display div
    display.textContent = displayValue;

});

// when user inputs dot
dot.addEventListener('click', () => {

    // check if displayValue already includes decimal
    if (displayValue.includes('.')) {
        return;
    }

    // if user presses decimal right after result
    if (calculationFinished === true) {
        displayValue = '0.';
        calculationFinished = false;
    }
    
    // append decimal to the number
    else {
        displayValue += '.';
    }

    display.textContent = displayValue;
})

// match functions
function add (num1, num2) {
    return num1 + num2;
}

function sub (num1, num2) {
    return num1 - num2;
}

function mul (num1, num2) {
    return num1 * num2;
}

function div (num1, num2) {
    if (num2 === 0) return "Infinity";
    return num1 / num2;
}

// use math functions to return results as per the operator
function operate (operator, num1, num2) {
    switch (operator) {
        case '+' : return add (num1, num2);
        case '-' : return sub (num1, num2);
        case '*' : return mul (num1, num2);
        case '/' : return div (num1, num2);
    }
}
