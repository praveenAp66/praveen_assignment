 5. How do you get the matching elements(repeated array value) in an integer array? Also, find the frequency of the repeated element?

function findRepeatedElements(arr) {
    const frequencyMap = {}; // Object to store the frequency of each element

    // Iterate through the array and count the frequency of each element
    for (let num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    const repeatedElements = []; // Array to store the repeated elements

    // Iterate through the frequency map to find repeated elements
    for (let num in frequencyMap) {
        if (frequencyMap[num] > 1) { // If frequency is greater than 1, it's a repeated element
            repeatedElements.push(parseInt(num)); // Convert num to integer and push to the repeatedElements array
        }
    }

    return { repeatedElements, frequencyMap };
}

// Test case
const arr = [1, 2, 3, 4, 5, 2, 3, 4, 6, 7, 3, 4, 4];
const { repeatedElements, frequencyMap } = findRepeatedElements(arr);
console.log("Repeated Elements:", repeatedElements); // Output: [2, 3, 4]
console.log("Frequency Map:", frequencyMap); // Output: { '1': 1, '2': 2, '3': 3, '4': 4, '5': 1, '6': 1, '7': 1 }
