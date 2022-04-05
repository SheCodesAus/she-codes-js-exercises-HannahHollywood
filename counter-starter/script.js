function total() {
    let user_number = document.getElementById("number").value;
    console.log(user_number);
}

function add(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    user_number = parseInt(number) + step;
    numberElement.innerText = number;
    console.log(number);
}

function take(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) - step;
    numberElement.innerText = number;
    console.log(number);
}

function multiply(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) * step;
    numberElement.innerText = number;
    console.log(number);
}

function divide(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) / step;
    numberElement.innerText = number;
    console.log(number);
}