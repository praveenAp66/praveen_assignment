// 1.find min sub array sum
let a = [4, -1, 0, 3, -3]; // Added a missing element
let n = a.length;
let cumulative = [];
cumulative.push(a[0]);
for (let i = 1; i < a.length; i++) {
    cumulative.push(cumulative[i - 1] + a[i]);
}
let min = Number.MAX_VALUE;
for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
        let sum = 0;
        if (i == 0) {
            sum = cumulative[j];
        } else {
            sum = cumulative[j] - cumulative[i - 1];
        }
        if (sum < min) {
            min = sum;
        }
    }
}
console.log(min);
