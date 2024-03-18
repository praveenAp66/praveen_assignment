// given an array check if any subarray has sum 0
let a = [2, 2, 1, -3, 4, 3, 1, -2, -3, 2];
let n = a.length;

let cumulative = [];
cumulative.push(a[0]);
for (let i = 1; i < a.length; i++) {
    cumulative.push(cumulative[i - 1] + a[i]);
}

let foundZeroSumSubarray = false; // Variable to track if a zero-sum subarray is found

for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
        let sum = 0;
        if (i > 0) {
            sum = cumulative[j] - cumulative[i - 1];
        } else {
            sum = cumulative[j];
        }
        if (sum == 0) {
            foundZeroSumSubarray = true;
            break; // If a zero-sum subarray is found, no need to continue checking
        }
    }
}

console.log(foundZeroSumSubarray); // Log the result after checking all subarrays
