let arr = [-7, 1, 5, 2, -4, 3, 0];
// let arr = [1, 2, 3]
//cumarr=[-7, -6, -1, 1, -3, 0, 0]
let n = arr.length;
let cumarr = [];

for (let k = 0; k < n; k++) {
    if (k === 0) {
        cumarr[k] = arr[k]; // Initialize cumarr with the first element of arr
    } else if (k > 0) {
        cumarr[k] = arr[k] + cumarr[k - 1]; // Compute cumulative sum
    }
}

console.log(cumarr);
let result = equlibriumindex(arr, cumarr);
console.log(result);

function equlibriumindex(arr, cumarr) {
    let cnt = 0;

    for (let i = 1; i < n - 1; i++) {
        let leftsum = cumarr[i - 1];
        let rightsum = cumarr[n - 1] - cumarr[i];

        if (leftsum === rightsum) {
            cnt++;
            console.log("Equilibrium index found at index", i, "with value", arr[i]);
        }
    }

    if (cnt === 0) {
        return -1;
    }

    return cnt;
}
