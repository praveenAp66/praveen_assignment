5.declare an array and sum of all values in array using loops - for ,while use function?

// Declare and initialize an array
let myArray = [1, 2, 3, 4, 5];

// Calculate sum of array elements using a for loop
let sumFor = 0;
for (let i = 0; i < myArray.length; i++) {
    sumFor += myArray[i];
}
console.log("Sum of array elements using for loop:", sumFor);

// Calculate sum of array elements using a while loop
let sumWhile = 0;
let j = 0;
while (j < myArray.length) {
    sumWhile += myArray[j];
    j++;
}
console.log("Sum of array elements using while loop:", sumWhile);

// Function to calculate sum of array elements
function sumArray(arr) {
    let sum = 0;
    for (let k = 0; k < arr.length; k++) {
        sum += arr[k];
    }
    return sum;
}

// Call the function to calculate sum of array elements
let sumFunction = sumArray(myArray);
console.log("Sum of array elements using function:", sumFunction);
