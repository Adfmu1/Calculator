let firstNumber = 3;
let secondNumber = 5;
let operator = "+";

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

function add (...arr) {
    return arr.reduce(
        (total, current) => total + current, 0,
    );
}

function subtract (...arr) {
    console.log(arr[0]);
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