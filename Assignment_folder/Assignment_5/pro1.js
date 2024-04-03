1.Q2. Special Index

Problem Description
Given an array, arr[] of size N, the task is to find the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.



Problem Constraints
1 <= n <= 10^5
-10^5 <= A[i] <= 10^5


Input Format
First argument contains an array A of integers of size N


Output Format
Return the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.



Example Input
Input 1:
A=[2, 1, 6, 4]
Input 2:

A=[1, 1, 1]


Example Output
Output 1:
1
Output 2:

3


Example Explanation
Explanation 1:
Removing arr[1] from the array modifies arr[] to { 2, 6, 4 } such that, arr[0] + arr[2] = arr[1]. 
Therefore, the required output is 1. 
Explanation 2:

Removing arr[0] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Removing arr[1] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Removing arr[2] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Therefore, the required output is 3.


ans:
function specialIndexCount(arr) {
    const n = arr.length;
    let count = 0;

    // Calculate the cumulative sums of even and odd indexed elements
    let cumevenarr = [];

    for (let k = 0; k < n; k++) {
        if (k === 0) {
            cumevenarr[k] = arr[k]; // Initialize cumarr with the first element of arr
        } else if (k %2==0 && k>0) {
            cumevenarr[k] = arr[k] + cumevenarr[k - 1];
        }else if (k %2!=0 && k>0) {
            cumevenarr[k] = cumevenarr[k - 1]; 
        }
    }

    let cumoddarr = [];

for (let k = 0; k < n; k++) {
    if (k === 0) {
        cumoddarr[k] = 0; // 
    } else if (k %2==0 && k>0) {
        cumoddarr[k] = cumoddarr[k - 1]; 
  
    }else if (k %2!=0 && k>0) {
        cumoddarr[k] = arr[k] + cumoddarr[k - 1];
    }

}

    // Check each index to see if removing it balances the sums
    for (let i = 0; i < n; i++) {
        let evenSumBeforeRemoval = i > 0 ? cumevenarr[i - 1] : 0;
        let oddSumBeforeRemoval = i > 0 ? cumoddarr[i - 1] : 0;
        let evenSumAfterRemoval = cumevenarr[n - 1] - cumevenarr[i];
        let oddSumAfterRemoval = cumoddarr[n - 1] - cumoddarr[i];

        if (evenSumBeforeRemoval + oddSumAfterRemoval === oddSumBeforeRemoval + evenSumAfterRemoval) {
            count++;
        }
    }

    return count;
}

// Example usage:
const A1 = [2, 1, 6, 4];
const A2 = [1, 1, 1];



console.log(specialIndexCount(A1)); // Output: 1
console.log(specialIndexCount(A2)); // Output: 3

