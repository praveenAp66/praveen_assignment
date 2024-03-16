
2.smallest of 3 no
function findSmallestNumber(a, b, c) {
    // Check if a is the smallest
    if (a <= b && a <= c) {
        return a;
    }
    // Check if b is the smallest
    else if (b <= a && b <= c) {
        return b;
    }
    // Otherwise, c must be the smallest
    else {
        return c;
    }
}

// Example usage:
var smallestNumber = findSmallestNumber(10, 5, 8);
console.log("The smallest number is: " + smallestNumber);
