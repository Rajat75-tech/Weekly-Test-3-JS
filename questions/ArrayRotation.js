/*
Array Rotation: Implement a function to rotate an array to the right by a specified number of positions.
*/

function rotateArray(arr, num) {
    let result = arr.slice();
    for (let i = 0; i < num; i++) {
        let last = result.pop();
        result.unshift(last);
    }
    return result;
}

let arr = [1, 2, 3, 4, 5];
let num = 3;

let rotatedArray = rotateArray(arr, num);
console.log(rotatedArray);