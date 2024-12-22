/*
String Palindrome: Create a function to check if a given string is a palindrome (reads the same forwards and backwards) while ignoring non-alphanumeric characters.
*/

function isPalindrome(str) {
    let palin = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            palin += char;
        }
    }
    let reversed = '';
    for (let i = palin.length - 1; i >= 0; i--) {
        reversed += palin[i];
    }
    return palin === reversed;
}

let inputString = "A man, a plan, a canal, Panama!";
let InputString = "JavaScript is fun";
let output = isPalindrome(InputString);
let result = isPalindrome(inputString);

console.log("Is Palindrome:", result);
console.log("Is Palindrome:",output);