/*
Longest Substring Without Repeating Characters: Write an algorithm to find the length of the longest substring without repeating characters in a given string.
*/

function longestSubstring(str) {
    let start = 0;
    let maxLength = 0;
    let charMap = {}; 

    for (let end = 0; end < str.length; end++) {
        const currentChar = str[end];

        if (charMap[currentChar] >= start) {
            start = charMap[currentChar] + 1;
        }
        charMap[currentChar] = end;

        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

const InputString = "abcdefghijklmnopqrstuvwxyzapzuyqtplg";
const result = longestSubstring(InputString);
console.log("The length of the longest substring without repeating characters is:", result);