// Get DOM elements
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
const resultDisplay = document.getElementById('result');

// Add event listeners for each operation
addBtn.addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    if (validateInput(num1, num2)) {
        resultDisplay.textContent = `Result: ${(num1 + num2).toFixed(2)}`;
    }
});

subtractBtn.addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    if (validateInput(num1, num2)) {
        resultDisplay.textContent = `Result: ${(num1 - num2).toFixed(2)}`;
    }
});

multiplyBtn.addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    if (validateInput(num1, num2)) {
        resultDisplay.textContent = `Result: ${(num1 * num2).toFixed(2)}`;
    }
});

divideBtn.addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    if (validateInput(num1, num2)) {
        if (num2 === 0) {
            resultDisplay.textContent = "Error: Cannot divide by zero!";
            return;
        }
        resultDisplay.textContent = `Result: ${(num1 / num2).toFixed(2)}`;
    }
});

// Input validation function
function validateInput(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = "Please enter valid numbers";
        return false;
    }
    return true;
}