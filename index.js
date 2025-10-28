let displayValue = '0';
const display = document.querySelector('.display-value');
const buttons = document.querySelectorAll('.digits');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        if (displayValue === '0') {
            displayValue = event.target.textContent;
        }
        else {
            displayValue += event.target.textContent;
        }
        display.textContent = displayValue;
    })
})


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

function operate (operator, num1, num2) {
    switch (operator) {
        case '+' : return add (num1, num2);
        case '-' : return sub (num1, num2);
        case '*' : return mul (num1, num2);
        case '/' : return div (num1, num2);
    }
}
