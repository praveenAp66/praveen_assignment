1. biggest of 3 no
function findLargestNumber(a, b, c) {
    // Check if a is the largest
    if (a >= b && a >= c) {
        return a;
    }
    // Check if b is the largest
    else if (b >= a && b >= c) {
        return b;
    }
    // Otherwise, c must be the largest
    else {
        return c;
    }
}

// Example usage:
var largestNumber = findLargestNumber(10, 5, 8);
console.log("The largest number is: " + largestNumber);
