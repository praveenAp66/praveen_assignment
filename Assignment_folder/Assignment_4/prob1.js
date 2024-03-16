Q1:  equilibrium
Problem Description
You are given an array A of integers of size N.

Your task is to find the equilibrium index of the given array

The equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.

If there are no elements that are at lower indexes or at higher indexes, then the corresponding sum of elements is considered as 0.

Note:

Array indexing starts from 0.
If there is no equilibrium index then return -1.
If there are more than one equilibrium indexes then return the minimum index.

constraints:

1 <= N <= 10^5
-10^5 <= A[i] <= 10^5
--------------------------------------------------------------------------------------------------------

eg:

Example Input
Input 1:
A = [-7, 1, 5, 2, -4, 3, 0]
Input 2:

A = [1, 2, 3]


Example Output
Output 1:
3
Output 2:

-1
  

ans:

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