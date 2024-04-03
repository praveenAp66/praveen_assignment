Q3. Subarray with least average


Problem Description
Given an array of size N, find the subarray of size K with the least average.



Problem Constraints
1<=k<=N<=10^5
-10^5<=A[i]<=10^5


Input Format
First argument contains an array A of integers of size N.
Second argument contains integer k.


Output Format
Return the index of the first element of the subarray of size k that has least average.
Array indexing starts from 0.


Example Input
Input 1:
A=[3, 7, 90, 20, 10, 50, 40]
B=3
Input 2:

A=[3, 7, 5, 20, -10, 0, 12]
B=2


Example Output
Output 1:
3
Output 2:

4


Example Explanation
Explanation 1:
Subarray between indexes 3 and 5
The subarray {20, 10, 50} has the least average 
among all subarrays of size 3.
Explanation 2:

 Subarray between [4, 5] has minimum average

ans:
function minAvgSubarrayIndex(A, B) {
    let minAvg = Number.MAX_SAFE_INTEGER;
    let minIndex = 0;
    
    // Calculate the sum of the first subarray of size B
    let sum = 0;
    for (let i = 0; i < B; i++) {
        sum += A[i];
    }
    
    // Initialize minAvg with the average of the first subarray
    minAvg = sum / B;
    
    // Update minAvg if needed
    for (let i = 1; i <= A.length - B; i++) {
        sum = sum - A[i - 1] + A[i + B - 1];
        let avg = sum / B;
        if (avg < minAvg) {
            minAvg = avg;
            minIndex = i;
        }
    }
    
    return minIndex;
}

// Test cases
console.log(minAvgSubarrayIndex([3, 7, 90, 20, 10, 50, 40], 3)); // Output: 3
console.log(minAvgSubarrayIndex([3, 7, 5, 20, -10, 0, 12], 2)); // Output: 4
