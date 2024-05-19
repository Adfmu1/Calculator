let firstNumber = 3;
let secondNumber = 5;
let operator = "+";

function operate (firstNumber, secondNumber, operator) {
    switch (operator) {
        case "+":
            add(firstNumber, secondNumber);
        case "-":
            subtract(firstNumber, secondNumber);
        case "*":
            multiply(firstNumber, secondNumber);
        case "/":
            divide(firstNumber, secondNumber);
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
        (total, current) => total / current, arr[0],
    );
}