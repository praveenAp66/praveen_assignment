3.even or odd
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Example usage:
var num = 7;
console.log(num + " is " + checkEvenOrOdd(num));
