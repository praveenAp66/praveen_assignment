8. How would you swap two numbers without using a third variable?
function swapNumbers(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return [a, b];
}

// Test case
let x = 5;
let y = 10;
console.log("Before swapping:", "x =", x, "y =", y);
[x, y] = swapNumbers(x, y);
console.log("After swapping:", "x =", x, "y =", y);
