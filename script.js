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

//listen to all number buttons
zero.addEventListener( "click", () => {
    console.log(wasOperatorPressed);
    if (!wasOperatorPressed) {
        firstNumber += zero.textContent;
    }
    if (wasOperatorPressed) {
        secondNumber += zero.textContent;
    }
        changeTheEquation();
});

one.addEventListener( "click", () => {
    console.log(wasOperatorPressed);
    if (!wasOperatorPressed) {
        firstNumber += one.textContent;
    }
    if (wasOperatorPressed) {
        secondNumber += one.textContent;
    }
        changeTheEquation();
});

two.addEventListener( "click", () => {
    console.log(wasOperatorPressed);
    if (!wasOperatorPressed) {
        firstNumber += two.textContent;
    }
    if (wasOperatorPressed) {
        secondNumber += two.textContent;
    }
        changeTheEquation();
});

three.addEventListener( "click", () => {
    console.log(wasOperatorPressed);
    if (!wasOperatorPressed) {
        firstNumber += three.textContent;
    }
    if (wasOperatorPressed) {
        secondNumber += three.textContent;
    }
        changeTheEquation();
});

four.addEventListener( "click", () => {
    console.log(wasOperatorPressed);
    if (!wasOperatorPressed) {
        firstNumber += four.textContent;
    }
    if (wasOperatorPressed) {
        secondNumber += four.textContent;
    }
        changeTheEquation();
});

five.addEventListener( "click", () => {
    console.log(wasOperatorPressed);
    if (!wasOperatorPressed) {
        firstNumber += five.textContent;
    }
    if (wasOperatorPressed) {
        secondNumber += five.textContent;
    }
        changeTheEquation();
});

six.addEventListener( "click", () => {
    console.log(wasOperatorPressed);
    if (!wasOperatorPressed) {
        firstNumber += six.textContent;
    }
    if (wasOperatorPressed) {
        secondNumber += six.textContent;
    }
        changeTheEquation();
});

seven.addEventListener( "click", () => {
    console.log(wasOperatorPressed);
    if (!wasOperatorPressed) {
        firstNumber += seven.textContent;
    }
    if (wasOperatorPressed) {
        secondNumber += seven.textContent;
    }
        changeTheEquation();
});

eight.addEventListener( "click", () => {
    console.log(wasOperatorPressed);
    if (!wasOperatorPressed) {
        firstNumber += eight.textContent;
    }
    if (wasOperatorPressed) {
        secondNumber += eight.textContent;
    }
        changeTheEquation();
});

nine.addEventListener( "click", () => {
    console.log(wasOperatorPressed);
    if (!wasOperatorPressed) {
        firstNumber += nine.textContent;
    }
    if (wasOperatorPressed) {
        secondNumber += nine.textContent;
    }
        changeTheEquation();
});

//clear and values divs on click
clearBtn.addEventListener( "click", () => {
    wasOperatorPressed = false;
    firstNumber = "";
    secondNumber = "";
    operator = "";
    equation.textContent = " ";
    result.textContent = " ";
});

//change operator
addBtn.addEventListener( "click", () => {
    operator = "+";
    wasOperatorPressed = true;
    changeTheEquation();
});

subtractBtn.addEventListener( "click", () => {
    operator = "-";
    wasOperatorPressed = true;
    changeTheEquation();
});

multiplyBtn.addEventListener( "click", () => {
    operator = "*";
    wasOperatorPressed = true;
    changeTheEquation();
});

divideBtn.addEventListener( "click", () => {
    operator = "/";
    wasOperatorPressed = true;
    changeTheEquation();
});

//change the equation and reverse the operators
function changeTheEquation () {
    equation.textContent = `${parseInt(firstNumber)} ${operator} ${secondNumber !== '' ? parseInt(secondNumber) : ''}`;
}

//calculate
equalsBtn.addEventListener( "click", () => {
    const resultOfEquation = operate(firstNumber, secondNumber, operator);
    wasOperatorPressed = false;
    result.textContent = `${resultOfEquation}`;
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