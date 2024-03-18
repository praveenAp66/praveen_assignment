// given N aary ElementInternals, calculate no of unique elements in every window of size 'k'
let a = [2, 4, 3, 8, 9, 4, 9, 4, 10];
let k = 3; // Assuming k is the window size
let n = a.length;

let result = [];

for (let i = 0; i <= n - k; i++) {
    let uniqueArr = new Set();
    for (let j = i; j <=i + k; j++) {
        uniqueArr.add(a[j]);
    }
    result.push(uniqueArr.size);
}

console.log(result.length);