/*
Array Intersection: Given two arrays, write a function to find their intersection (common elements).
*/

function intersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const result = [];

    for (const num of arr2) {
        if (set1.has(num)) {
            result.push(num);
            set1.delete(num); 
        }
    }
    return result;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const result = intersection(array1, array2);

console.log("Intersection:", result);