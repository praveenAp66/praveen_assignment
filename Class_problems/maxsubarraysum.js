1. find max sub array sum
let a = [4, -1, 0, 3, -3]; // assuming the missing value is 0
let n = a.length;
let cumulative = [];
cumulative.push(a[0]);
for (let i = 1; i < a.length; i++) {
    if (a[i] === undefined) {
        a[i] = 0; // Assuming undefined value should be treated as 0
    }
    cumulative.push(cumulative[i - 1] + a[i]);
}
let max = -Infinity; // Initialize max to a very small negative number
for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
        let sum = 0;
        if (i > 0) {
            sum = cumulative[j] - cumulative[i - 1];
        } else {
            sum = cumulative[j];
        }
        if (sum > max) {
            max = sum;
        }
    }
}
console.log(max);
