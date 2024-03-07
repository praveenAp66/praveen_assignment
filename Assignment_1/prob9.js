9. array reversalwithout using built in function
function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        // Swap elements at start and end indices
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        // Move start index forward and end index backward
        start++;
        end--;
    }

    return arr;
}

// Example usage:
let myArray = [1, 2, 3, 4, 5];
console.log("Original array:", myArray);
console.log("Reversed array:", reverseArray(myArray));
