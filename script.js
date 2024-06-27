// DOM assignments section
const calculatorDiv = document.querySelector("#calculatorDiv");
const buttonOne = document.querySelector("#buttonOne");
const buttonTwo = document.querySelector("#buttonTwo");
const buttonThree = document.querySelector("#buttonThree");
const buttonFour = document.querySelector("#buttonFour");
const buttonFive = document.querySelector("#buttonFive");
const buttonSix = document.querySelector("#buttonSix");
const buttonSeven = document.querySelector("#buttonSeven");
const buttonEight = document.querySelector("#buttonEight");
const buttonNine = document.querySelector("#buttonNine");
const buttonZero = document.querySelector("#buttonZero");
const buttonPlus = document.querySelector("#buttonPlus");
const buttonMinus = document.querySelector("#buttonMinus");
const buttonMult = document.querySelector("#buttonMult");
const buttonDiv = document.querySelector("#buttonDiv");
const buttonClear = document.querySelector("#buttonClear");
const buttonEqual = document.querySelector("#buttonEqual");
const display = document.querySelector("#display");

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

// creating variables to store the 1st nr., the operator, and the 2nd nr.
let displayValue = 0;
let firstNumber = undefined;
let operator = undefined;
let secondNumber = undefined;

// functino to update the display
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

// what happens when each button is clicked
buttonOne.addEventListener("click", () => {
    if (firstNumber === undefined) {
        firstNumber = 1;
    } else {
        if (secondNumber === undefined) {
            secondNumber = 1;
        } else {
            secondNumber = secondNumber * 10 + 1;
        }
    }
    displayValue = secondNumber !== undefined ? secondNumber : firstNumber;
    updateDisplay();
});
buttonTwo.addEventListener("click", () => {
    if (firstNumber === undefined) {
        firstNumber = 2;
    } else {
        if (secondNumber === undefined) {
            secondNumber = 2;
        } else {
            secondNumber = secondNumber * 10 + 2;
        }
    }
    displayValue = secondNumber !== undefined ? secondNumber : firstNumber;
    updateDisplay();
});
buttonThree.addEventListener("click", () => {
    if (firstNumber === undefined) {
        firstNumber = 3;
    } else {
        if (secondNumber === undefined) {
            secondNumber = 3;
        } else {
            secondNumber = secondNumber * 10 + 3;
        }
    }
    displayValue = secondNumber !== undefined ? secondNumber : firstNumber;
    updateDisplay();
});
buttonFour.addEventListener("click", () => {
    if (firstNumber === undefined) {
        firstNumber = 4;
    } else {
        if (secondNumber === undefined) {
            secondNumber = 4;
        } else {
            secondNumber = secondNumber * 10 + 4;
        }
    }
    displayValue = secondNumber !== undefined ? secondNumber : firstNumber;
    updateDisplay();
});
buttonFive.addEventListener("click", () => {
    if (firstNumber === undefined) {
        firstNumber = 5;
    } else {
        if (secondNumber === undefined) {
            secondNumber = 5;
        } else {
            secondNumber = secondNumber * 10 + 5;
        }
    }
    displayValue = secondNumber !== undefined ? secondNumber : firstNumber;
    updateDisplay();
});
buttonSix.addEventListener("click", () => {
    if (firstNumber === undefined) {
        firstNumber = 6;
    } else {
        if (secondNumber === undefined) {
            secondNumber = 6;
        } else {
            secondNumber = secondNumber * 10 + 6;
        }
    }
    displayValue = secondNumber !== undefined ? secondNumber : firstNumber;
    updateDisplay();
});
buttonSeven.addEventListener("click", () => {
    if (firstNumber === undefined) {
        firstNumber = 7;
    } else {
        if (secondNumber === undefined) {
            secondNumber = 7;
        } else {
            secondNumber = secondNumber * 10 + 7;
        }
    }
    displayValue = secondNumber !== undefined ? secondNumber : firstNumber;
    updateDisplay();
});
buttonEight.addEventListener("click", () => {
    if (firstNumber === undefined) {
        firstNumber = 8;
    } else {
        if (secondNumber === undefined) {
            secondNumber = 8;
        } else {
            secondNumber = secondNumber * 10 + 8;
        }
    }
    displayValue = secondNumber !== undefined ? secondNumber : firstNumber;
    updateDisplay();
});
buttonNine.addEventListener("click", () => {
    if (firstNumber === undefined) {
        firstNumber = 9;
    } else {
        if (secondNumber === undefined) {
            secondNumber = 9;
        } else {
            secondNumber = secondNumber * 10 + 9;
        }
    }
    displayValue = secondNumber !== undefined ? secondNumber : firstNumber;
    updateDisplay();
});
buttonZero.addEventListener("click", () => {
    if (firstNumber === undefined) {
        firstNumber = 0;
    } else {
        if (secondNumber === undefined) {
            secondNumber = 0;
        } else {
            secondNumber = secondNumber * 10 + 0;
        }
    }
    displayValue = secondNumber !== undefined ? secondNumber : firstNumber;
    updateDisplay();
});

// When an operator button is clicked
buttonPlus.addEventListener("click", () => {
    operator = "+";
    displayValue = operator;
    updateDisplay();
});
buttonMinus.addEventListener("click", () => {
    operator = "-";
    displayValue = operator;
    updateDisplay();
});
buttonMult.addEventListener("click", () => {
    operator = "*";
    displayValue = operator;
    updateDisplay();
});
buttonDiv.addEventListener("click", () => {
    operator = "/";
    displayValue = operator;
    updateDisplay();
});

// when clean button is clicked
buttonClear.addEventListener("click", () => {
    firstNumber = undefined;
    secondNumber = undefined;
    operator = "";
    displayValue = 0;
    updateDisplay();
});

// When the equal button is clicked
buttonEqual.addEventListener("click", () => {
    if (firstNumber !== undefined && operator && secondNumber !== undefined) {
        displayValue = operate(firstNumber, secondNumber, operator);
        updateDisplay();

        // Reset the variables for further calculations
        firstNumber = displayValue;
        operator = undefined;
        secondNumber = undefined;
    } else {
        // Handle error or incomplete expression
        displayValue = "Error";
        updateDisplay();
    }
});
