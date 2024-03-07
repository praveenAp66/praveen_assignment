
4.declare an array and print all values in an aarray using loops - for,while, use function?
// Declare and initialize an array
let myArray = [1, 2, 3, 4, 5];

// Print array elements using a for loop
console.log("Printing array elements using for loop:");
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// Print array elements using a while loop
console.log("\nPrinting array elements using while loop:");
let j = 0;
while (j < myArray.length) {
    console.log(myArray[j]);
    j++;
}

// Print array elements using a function
console.log("\nPrinting array elements using a function:");
function printArray(arr) {
    for (let k = 0; k < arr.length; k++) {
        console.log(arr[k]);
    }
}