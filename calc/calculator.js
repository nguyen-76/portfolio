const display = document.getElementById("display");
let num1 = "";
let num2 = "";
let operator = null;

const addNumber = (num) => {
    if (!operator) {
        num1 += num;
        display.innerHTML = num1;
    } else {
        num2 += num;
        display.innerHTML = num2;
    }
};

const add = () => {
    operator = "add";
};

const subtract = () => {
    operator = "subtract";
};

const multiply = () => {
    operator = "multiply";
};

const divide = () => {
    operator = "divide";
};
const calc = () => {
    if (operator === "add") {
        display.innerHTML = parseFloat(num1) + parseFloat(num2);
        num1 = display.innerHTML;
        num2 = "";
    } if (operator === "subtract") {
        display.innerHTML = parseFloat(num1) - parseFloat(num2);
        num1 = display.innerHTML;
        num2 = "";
    } if (operator === "multiply") {
        display.innerHTML = parseFloat(num1) * parseFloat(num2);
        num1 = display.innerHTML;
        num2 = "";
    } if (operator === "divide") {
        display.innerHTML = parseFloat(num1) / parseFloat(num2);
        num1 = display.innerHTML;
        num2 = "";
    } if (display.innerHTML === "NaN") {
        num1 = "";
        num2 = "";
        operator = null;
    }
};

const equal = () => {
    calc();
    num1 = "";
    num2 = "";
    operator = null;
};

const erase = () => {
    debugger;
    num1 = "";
    num2 = "";
    operator = null;
    display.innerHTML = "";
};