/*
Anagram Check: Implement an algorithm to check if two strings are anagrams of each other (contain the same characters with the same frequency)
*/

function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

let input1 = "listen";
let input2 = "silent";
let input3 = "hello";
let input4 = "world";

console.log(areAnagrams(input1, input2));
console.log(areAnagrams(input3, input4));