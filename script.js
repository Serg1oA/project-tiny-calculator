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

// creating variables to store the 1st nr., the operator, and the 2nd nr.
let displayValue = 0;
updateDisplay();
let firstNumber;
let operator;
let secondNumber;
let lastButtonPressed;
let resultOfEqual = 0;

// what happens when each button is clicked
buttonOne.addEventListener("click", () => {
    if (lastButtonPressed !== "operator") {
        if (firstNumber === undefined) {
            firstNumber = 1;
            displayValue = firstNumber;
        } else {
            firstNumber = firstNumber * 10 + 1;
            displayValue = firstNumber;
        }
    } else if (lastButtonPressed === "operator") {
        if (secondNumber === undefined) {
            secondNumber = 1;
            displayValue = secondNumber;
        } else {
            secondNumber = secondNumber * 10 + 1;
            displayValue = secondNumber;
        }
    }
    lastButtonPressed = "number";
    updateDisplay();
});

buttonTwo.addEventListener("click", () => {
    if (lastButtonPressed !== "operator") {
        if (firstNumber === undefined) {
            firstNumber = 2;
            displayValue = firstNumber;
        } else {
            firstNumber = firstNumber * 10 + 2;
            displayValue = firstNumber;
        }
    } else if (lastButtonPressed === "operator") {
        if (secondNumber === undefined) {
            secondNumber = 2;
            displayValue = secondNumber;
        } else {
            secondNumber = secondNumber * 10 + 2;
            displayValue = secondNumber;
        }
    }
    lastButtonPressed = "number";
    updateDisplay();
});

buttonThree.addEventListener("click", () => {
    if (lastButtonPressed !== "operator") {
        if (firstNumber === undefined) {
            firstNumber = 3;
            displayValue = firstNumber;
        } else {
            firstNumber = firstNumber * 10 + 3;
            displayValue = firstNumber;
        }
    } else if (lastButtonPressed === "operator") {
        if (secondNumber === undefined) {
            secondNumber = 3;
            displayValue = secondNumber;
        } else {
            secondNumber = secondNumber * 10 + 3;
            displayValue = secondNumber;
        }
    }
    lastButtonPressed = "number";
    updateDisplay();
});

buttonFour.addEventListener("click", () => {
    if (lastButtonPressed !== "operator") {
        if (firstNumber === undefined) {
            firstNumber = 4;
            displayValue = firstNumber;
        } else {
            firstNumber = firstNumber * 10 + 4;
            displayValue = firstNumber;
        }
    } else if (lastButtonPressed === "operator") {
        if (secondNumber === undefined) {
            secondNumber = 4;
            displayValue = secondNumber;
        } else {
            secondNumber = secondNumber * 10 + 4;
            displayValue = secondNumber;
        }
    }
    lastButtonPressed = "number";
    updateDisplay();
});

buttonFive.addEventListener("click", () => {
    if (lastButtonPressed !== "operator") {
        if (firstNumber === undefined) {
            firstNumber = 5;
            displayValue = firstNumber;
        } else {
            firstNumber = firstNumber * 10 + 5;
            displayValue = firstNumber;
        }
    } else if (lastButtonPressed === "operator") {
        if (secondNumber === undefined) {
            secondNumber = 5;
            displayValue = secondNumber;
        } else {
            secondNumber = secondNumber * 10 + 5;
            displayValue = secondNumber;
        }
    }
    lastButtonPressed = "number";
    updateDisplay();
});

buttonSix.addEventListener("click", () => {
    if (lastButtonPressed !== "operator") {
        if (firstNumber === undefined) {
            firstNumber = 6;
            displayValue = firstNumber;
        } else {
            firstNumber = firstNumber * 10 + 6;
            displayValue = firstNumber;
        }
    } else if (lastButtonPressed === "operator") {
        if (secondNumber === undefined) {
            secondNumber = 6;
            displayValue = secondNumber;
        } else {
            secondNumber = secondNumber * 10 + 6;
            displayValue = secondNumber;
        }
    }
    lastButtonPressed = "number";
    updateDisplay();
});

buttonSeven.addEventListener("click", () => {
    if (lastButtonPressed !== "operator") {
        if (firstNumber === undefined) {
            firstNumber = 7;
            displayValue = firstNumber;
        } else {
            firstNumber = firstNumber * 10 + 7;
            displayValue = firstNumber;
        }
    } else if (lastButtonPressed === "operator") {
        if (secondNumber === undefined) {
            secondNumber = 7;
            displayValue = secondNumber;
        } else {
            secondNumber = secondNumber * 10 + 7;
            displayValue = secondNumber;
        }
    }
    lastButtonPressed = "number";
    updateDisplay();
});

buttonEight.addEventListener("click", () => {
    if (lastButtonPressed !== "operator") {
        if (firstNumber === undefined) {
            firstNumber = 8;
            displayValue = firstNumber;
        } else {
            firstNumber = firstNumber * 10 + 8;
            displayValue = firstNumber;
        }
    } else if (lastButtonPressed === "operator") {
        if (secondNumber === undefined) {
            secondNumber = 8;
            displayValue = secondNumber;
        } else {
            secondNumber = secondNumber * 10 + 8;
            displayValue = secondNumber;
        }
    }
    lastButtonPressed = "number";
    updateDisplay();
});

buttonNine.addEventListener("click", () => {
    if (lastButtonPressed !== "operator") {
        if (firstNumber === undefined) {
            firstNumber = 9;
            displayValue = firstNumber;
        } else {
            firstNumber = firstNumber * 10 + 9;
            displayValue = firstNumber;
        }
    } else if (lastButtonPressed === "operator") {
        if (secondNumber === undefined) {
            secondNumber = 9;
            displayValue = secondNumber;
        } else {
            secondNumber = secondNumber * 10 + 9;
            displayValue = secondNumber;
        }
    }
    lastButtonPressed = "number";
    updateDisplay();
});

buttonZero.addEventListener("click", () => {
    if (lastButtonPressed !== "operator") {
        if (firstNumber === undefined) {
            firstNumber = 0;
            displayValue = firstNumber;
        } else {
            firstNumber = firstNumber * 10 + 0;
            displayValue = firstNumber;
        }
    } else if (lastButtonPressed === "operator") {
        if (secondNumber === undefined) {
            secondNumber = 0;
            displayValue = secondNumber;
        } else {
            secondNumber = secondNumber * 10 + 0;
            displayValue = secondNumber;
        }
    }
    lastButtonPressed = "number";
    updateDisplay();
});

// When an operator button is clicked
buttonPlus.addEventListener("click", () => {
    if (firstNumber === undefined) {
        firstNumber = 0;
    }
    if (lastButtonPressed === "equal") {
        firstNumber = resultOfEqual;
    }
    operator = "+";
    displayValue = operator;
    lastButtonPressed = "operator";
    updateDisplay();
});

buttonMinus.addEventListener("click", () => {
    if (firstNumber === undefined) {
        firstNumber = 0;
    }
    if (lastButtonPressed === "equal") {
        firstNumber = resultOfEqual;
    }
    operator = "-";
    displayValue = operator;
    lastButtonPressed = "operator";
    updateDisplay();
});

buttonMult.addEventListener("click", () => {
    if (firstNumber === undefined) {
        firstNumber = 0;
    }
    if (lastButtonPressed === "equal") {
        firstNumber = resultOfEqual;
    }
    operator = "*";
    displayValue = operator;
    lastButtonPressed = "operator";
    updateDisplay();
});

buttonDiv.addEventListener("click", () => {
    if (firstNumber === undefined) {
        firstNumber = 0;
    }
    if (lastButtonPressed === "equal") {
        firstNumber = resultOfEqual;
    }
    operator = "/";
    displayValue = operator;
    lastButtonPressed = "operator";
    updateDisplay();
});

// when clean button is clicked
buttonClear.addEventListener("click", () => {
    firstNumber = undefined;
    secondNumber = undefined;
    operator = "";
    displayValue = 0;
    lastButtonPressed = "clear";
    updateDisplay();
});

// When the equal button is clicked
buttonEqual.addEventListener("click", () => {
    if (firstNumber !== undefined && operator && secondNumber !== undefined) {
        displayValue = operate(firstNumber, secondNumber, operator);
        updateDisplay();
        // Reset the variables for further calculations
        resultOfEqual = displayValue; 
        operator = undefined;
        secondNumber = undefined;
    } else {
        // Handle error or incomplete expression
        displayValue = "Error, redo!";
        updateDisplay();
    }
    lastButtonPressed = "equal";
});