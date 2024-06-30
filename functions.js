// functions for each operation
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

// function to update the display
function updateDisplay() {
    display.textContent = displayValue;
}

// create a new function "operate"
function operate(a, b, x) {
    if (x === "+") {
        return add(a, b);
    } else if (x === "-") {
        return subtract(a, b);
    } else if (x === "*") {
        return multiply(a, b);
    } else if (x === "/") {
        return divide(a, b);
    }
}