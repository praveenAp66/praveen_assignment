3.create a calculator usingn function for each operation - sum,sub,mul,div of 2 no by user?

 
function calculate() {
    // Get the input values
    let num1 = parseInt(prompt("Enter the first number:"));
    let num2 = parseInt(prompt("Enter the second number:"));

    // Calculate the sum
    let sum = num1 + num2;
    console.log("Sum:", sum);

    // Calculate the difference
    let difference = num1 - num2;
    console.log("Difference:", difference);

    // Calculate the product
    let product = num1 * num2;
    console.log("Product:", product);

    // Check if the second number is not zero before performing division
    if (num2 !== 0) {
        // Calculate the division
        let division = num1 / num2;
        console.log("Division:", division);
    } else {
        console.log("Cannot divide by zero!");
    }
}

// Call the calculate function
calculate();
