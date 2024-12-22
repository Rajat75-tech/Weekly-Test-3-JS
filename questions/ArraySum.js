/*
Array Sum: Write an algorithm to find the pair of elements in an array that adds up to a specific target sum.
*/

function findPairWithSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [arr[i], arr[j]];
            }
        }
    }
    return null;
}

let arr = [1, 2, 3, 4, 5];
let target = 7;

let result = findPairWithSum(arr, target);

if (result) {
    console.log("Pair found:", result);
} else {
    console.log("No pair found with the given sum.");
}