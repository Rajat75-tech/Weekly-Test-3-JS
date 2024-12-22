/*
String Compression: Write a function to perform basic string compression using the counts of repeated characters. For example, "aabcccccaaa" would become "a2b1c5a3."
*/

function compressString(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let count = 1;
        while (str[i] === str[i + 1]) {
            count++;
            i++;
        }
        result += str[i] + count;
    }
    if (result.length < str.length) {
        return result; 
    } else {
        return str; 
    }
}

let inputString = "aaabbcccddd";
let InputString = "aabcccccaaa";

let compressedString = compressString(inputString);
let CompressedString = compressString(InputString);

console.log("Original String:", inputString);
console.log("Compressed String:", compressedString);

console.log("Original String:", InputString);
console.log("Compressed String:", CompressedString);