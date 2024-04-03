 6.How do you reverse an array?
function reverseArray(arr) {
    const reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

// Test case
const array = [1, 2, 3, 4, 5];
console.log("Original Array:", array);
console.log("Reversed Array:", reverseArray(array));
