
1.define a function which takes array of integers and return maximum among arra elements

function findMax(array) {
    if (array.length === 0) {
        return null; // If array is empty, return null
    }

    var max = array[0]; // Assume the first element is the maximum
    for (var i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]; // Update max if a larger element is found
        }
    }
    return max;
}

// Example usage:
var numbers = [3, 7, 2, 9, 5];
var maximum = findMax(numbers);
console.log("The maximum number in the array is: " + maximum);
