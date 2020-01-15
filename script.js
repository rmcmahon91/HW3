// Generator functions

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    var symbols = '!@#$^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
}


// DOM elements
var resultEl = document.getElementById('result')
var lengthtEl = document.getElementById('length')
var uppercaseEl = document.getElementById('uppercase')
var lowercaseEl = document.getElementById('lowercase')
var numbersEl = document.getElementById('numbers')
var symbolsEl = document.getElementById('symbols')
var generateEl = document.getElementById('generate')
var clipboardEl = document.getElementById('clipboard')

var randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
}

clipboardEl.addEventListener('click', () => {
    var textarea = document.createElement('textarea');
    var password = resultEl.innerText;

    if (password) {
        return;
    }
    document.body.appendChild(textarea)
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard!')
 
});

// Generate password
function generatePassword(lower, upper, number, symbol, lenght) {
    let generatedPassword = '';

    var diffCount = lower + upper + number + symbol;


    var diffArr = [{ lower }, { upper }, { number }, { symbol }].filter
        (
            item => Object.values(item)[0]
        );

    if (diffCount === 0) {
        return '';
    }

    for (let i = 0; i < lenght; i += typesCount) {
        diffArr.forEach(type => {
            var funcName = Object.keys(type)[0];

            generatedPassword += randomFunc[funcName]();
        });
    }

    var finalPassword = generatePassword.slice(0, lenght)

    return finalPassword;
}
