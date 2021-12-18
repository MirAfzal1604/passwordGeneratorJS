const pwE1 = document.getElementById("pw");
const lenE1 = document.getElementById("len");
const upperE1 = document.getElementById("upper");
const lowerE1 = document.getElementById("lower");
const numberE1 = document.getElementById("number");
const symbolE1 = document.getElementById("symbol");
const generateE1 = document.getElementById("generate");

const upperCases = "QWERTYUIOPLKJHGFDSAZXCVBNM";
const lowerCases = "qwertyuiopasdfghjklzxcvbnm";
const numbers = "0123456789";
const symbol = "<>/.,;'\":|':{}][()_+!@#$%^&*~`";

function getUpperCase() {
    return upperCases[Math.floor(Math.random() * upperCases.length)];
}

function getLowerCase() {
    return lowerCases[Math.floor(Math.random() * lowerCases.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbol[Math.floor(Math.random() * symbol.length)];
}

function generatePasswort() {
    const len = lenE1.value;
    let password = "";
    for (let i = 0; i < len; i++) {
        const x = generateX();
        password += x;
    }
    pwE1.innerText = password;
}

function generateX() {
    const xs = [];
    if (upperE1.checked) {
        xs.push(getUpperCase());
    }
    if (lowerE1.checked) {
        xs.push(getLowerCase());
    }
    if (numberE1.checked) {
        xs.push(getNumber());
    }
    if (symbolE1.checked) {
        xs.push(getSymbol());
    }
    if (xs.length === 0) return "";
    return xs[Math.floor(Math.random() * xs.length)];
}

generateE1.addEventListener("click", generatePasswort);