

1given N number where each number is occuring the two times except one number,find that numberusing bitwise operATION
function findSingleNumber(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result ^= arr[i];
    }
    return result;
}

// Example usage:
let arr = [4, 2, 3, 1, 2, 3, 1]; // In this array, all numbers occur twice except 4
console.log("Number occurring only once:", findSingleNumber(arr)); // Output: 4
