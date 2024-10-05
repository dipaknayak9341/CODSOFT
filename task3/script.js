let currentInput = '';
let previousInput = '';
let operator = null;

// Append number to the display
function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

// Choose operator
function chooseOperator(op) {
    if (currentInput === '') return; // Prevent operator without a number
    if (previousInput !== '') {
        compute();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

// Clear the display
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = null;
    updateDisplay();
}

// Compute the result
function compute() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                result = 'Error';
                break;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = null;
    previousInput = '';
    updateDisplay();
}

// Update the display screen
function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
