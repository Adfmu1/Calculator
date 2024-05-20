//select all buttons
//numbers buttons
const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");

//operators buttons
const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");

//equals and clear equasion button
const equalsBtn = document.querySelector(".equals-btn");
const clearBtn = document.querySelector(".clear-btn");

//divs and texts for equation
const equation = document.querySelector(".equation");
const result = document.querySelector(".result");

//clear divs on click
clearBtn.addEventListener( "click", () => {
    equation.textContent = "";
    result.textContent = "";
});

//change operator
addBtn.addEventListener( "click", () => {
    operator = "+";
    changeTheDiv();
});

subtractBtn.addEventListener( "click", () => {
    operator = "-";
    changeTheDiv();
});

multiplyBtn.addEventListener( "click", () => {
    operator = "*";
    changeTheDiv();
});

divideBtn.addEventListener( "click", () => {
    operator = "/";
    changeTheDiv();
});

//change the display of equation
function changeTheDiv () {
    equation.textContent = `${firstNumber} ${operator} ${secondNumber}`;
}

//calculate
equalsBtn.addEventListener( "click", () => {
    const resultOfEquation = operate(firstNumber, secondNumber, operator);
    console.log(resultOfEquation);
    result.textContent = `${resultOfEquation}`;
} );

//initialize important variables
let firstNumber = 3;
let secondNumber = 5;
let operator = "+";

//choose correct mathematical operation
function operate (firstNumber, secondNumber, operator) {
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);
    }

}

//mathematical operations
function add (...arr) {
    return arr.reduce(
        (total, current) => total + current, 0,
    );
}

function subtract (...arr) {
    return arr.reduce(
        (total, current) => total - current, arr[0] * 2,
    );
}

function multiply (...arr) {
    return arr.reduce(
        (total, current) => total * current, 1,
    );
}

function divide (...arr) {
    return arr.reduce(
        (total, current) => total / current, arr[0] * arr[0],
    );
}