// variables to hold states
let displayValue = '0';
let firstNumber = null;
let secondNumber = null;
let operator = null;

// get all required html elements
const display = document.querySelector('.display-value');
const digits = document.querySelectorAll('.digits');
const operators = document.querySelectorAll('.operators');
const equal = document.getElementById('equals');
const clear = document.getElementById('clear');

// update display accordingly as per button digits 
digits.forEach(digit => {
    digit.addEventListener('click', (event) => {

        // if displayValue is zero update it to clicked digit
        if (displayValue === '0') {
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

    // store the secondNumber value from displayValue
    secondNumber = displayValue;
    
    // parse string values of firstNumber and secondNumber
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

    // calculate and return result
    displayValue = operate(operator, firstNumber, secondNumber);

    // update display div
    display.textContent = displayValue;
    
});

// when user input AC
clear.addEventListener('click', () => {

    // reset all the variables
    firstNumber = null;
    secondNumber = null;
    displayValue = '0';
    operator = null;

    // update the display div
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
