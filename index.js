const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const charSyms = [ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

realChars = [];

let firstPassword = document.getElementById("firstPassword");
let secondPassword = document.getElementById("secondPassword");
let lengthInput = document.getElementById("lenInput");
let length = 0;
let chars = characters.length;
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");

function calcLength() {
    length = Number(lengthInput.value);
}

function optionCheck() {
    let numVal = numbers.checked;
    let symVal = symbols.checked;
    if ( numVal && symVal ) {
        realChars = characters;
        return;
    }
    else if ( numVal && !symVal ) {
        chars = 61;
        realChars = characters;
        return;
    }
    else if ( !numVal && !symVal ) {
        chars = 52;
        realChars = characters;
        return;
    }
    else if ( !numVal && symVal ) {
        chars = charSyms.length;
        realChars = charSyms;
        return;
    }
    
}

function generatePasswords() {
    let password1 = "";
    let password2 = "";
    calcLength();
    optionCheck();
    
    
    for (let i = 0; i < length; i++) {
        password1 += realChars[Math.floor(Math.random() * chars)];
    }
    firstPassword.textContent = password1;
    for (let i = 0; i < length; i++) {
        password2 += realChars[Math.floor(Math.random() * chars)];
    }
    secondPassword.textContent = password2;
}

