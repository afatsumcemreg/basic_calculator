// CALCULATER CHALLANGE
let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// create four functions: add(), subtract(), divide(), multiply()
// call the correct function when the user clicks on one of the buttons
// perform the given calculation using num1 and num2
// render the result of he calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "plus button, you should render"
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

let sum_el = document.getElementById("sum-el")

function add() {
    let result = num1 + num2
    sum_el.textContent = "Sum: " + result
}

function subtract() {
    let result = num1 - num2
    sum_el.textContent = "Sum: " + result
}

function divide() {
    let result = num1 / num2
    sum_el.textContent = "Sum: " + result
}

function multiply() {
    let result = num1 * num2
    sum_el.textContent = "Sum: " + result
}

