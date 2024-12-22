/*
String Reversal: Write a function to reverse a given string in JavaScript without using built-in reverse functions.
*/

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

let inputString = "hello";
let reversedString = reverseString(inputString);
console.log("Original String:", inputString);
console.log("Reversed String:", reversedString);