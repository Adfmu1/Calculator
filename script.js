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

//initialize important variables
let firstNumber = "";
let secondNumber = "";
let operator = "";
let wasOperatorPressed = false;
let lastResult = "";

const buttonsArr = [zero, one, two, three, four, five, six, seven, eight, nine];

//listen to all buttons
for (let i = 0; i < buttonsArr.length - 1; i++) {
    buttonsArr[i].addEventListener( "click", () => {
        setNumbers(buttonsArr[i]);

        changeTheEquation();
    })
    
}

function setNumbers (number) {
    if (!wasOperatorPressed && firstNumber == lastResult) {
        firstNumber = number.textContent;
    }
    else if (!wasOperatorPressed && firstNumber != lastResult) {
        firstNumber += number.textContent;
    }
    
    if (wasOperatorPressed) {
        secondNumber += number.textContent;
    }

    result.textContent = ""
}

//clear and values divs on click
clearBtn.addEventListener( "click", () => {
    wasOperatorPressed = false;
    firstNumber = "";
    secondNumber = "";
    operator = "";
    equation.textContent = "";
    result.textContent = "";
});

//change operator
addBtn.addEventListener( "click", () => {
    respondToOperator(addBtn);
});

subtractBtn.addEventListener( "click", () => {
    respondToOperator(subtractBtn);
});

multiplyBtn.addEventListener( "click", () => {
    respondToOperator(multiplyBtn);
});

divideBtn.addEventListener( "click", () => {
    respondToOperator(divideBtn);
});

//creates adequate response to pressed operator
function respondToOperator (oper) {
    operator = oper.textContent;
    wasOperatorPressed = true;

    changeTheEquation();
    
    result.textContent = "";
}

//change the equation and reverse the operators
function changeTheEquation () {
    equation.textContent = `${parseInt(firstNumber)} ${operator} ${secondNumber !== '' ? parseInt(secondNumber) : ''}`;
}

//calculate
equalsBtn.addEventListener( "click", () => {
    //numbers will be 8 digits long (excluding dot)
    let resultOfEquation = operate(firstNumber, secondNumber, operator);
    if (!isFinite(resultOfEquation)) {
        alert("CANT DIVIDE BY 0");

        firstNumber = "";
        secondNumber = "";
        operator = "";
        wasOperatorPressed = false;
    }
    else if (isNaN(resultOfEquation) && firstNumber != "") {
        result.textContent = firstNumber;

        lastResult = firstNumber;
    }
    else if (isNaN(resultOfEquation)) {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        wasOperatorPressed = false;

        result.textContent = "ERROR";
    }
    else {
        resultOfEquation = resultOfEquation.toString().slice(0, 9)
        wasOperatorPressed = false;
        firstNumber = `${resultOfEquation}`;
        secondNumber = "";
        operator = "";
    
        lastResult = resultOfEquation;
    
        result.textContent = `${resultOfEquation}`;
    }
} );



//choose correct mathematical operation
function operate (firstNumber, secondNumber, operator) {
    switch (operator) {
        case "+":
            return add(parseInt(firstNumber), parseInt(secondNumber));
        case "-":
            return subtract(parseInt(firstNumber), parseInt(secondNumber));
        case "*":
            return multiply(parseInt(firstNumber), parseInt(secondNumber));
        case "/":
            return divide(parseInt(firstNumber), parseInt(secondNumber));
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