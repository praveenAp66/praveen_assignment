Q1. Special Subsequences "AG"


Problem Description
You have given a string A having Uppercase English letters.

You have to find how many times subsequence "AG" is there in the given string.

NOTE: Return the answer modulo 109 + 7 as the answer can be very large.



Problem Constraints
1 <= length(A) <= 10^5



Input Format
First and only argument is a string A.



Output Format
Return an integer denoting the answer.



Example Input
Input 1:

 A = "ABCGAG"
Input 2:

 A = "GAB"


Example Output
Output 1:

 3
Output 2:

 0


Example Explanation
Explanation 1:

 Subsequence "AG" is 3 times in given string 
Explanation 2:

 There is no subsequence "AG" in the given string.


ans:



function countAGSubsequences(A) {
    let count = 0;

    // Iterate through the string
    for (let i = 0; i < A.length; i++) {
        if (A[i] === 'A') {
            let gCount = 0;
            // Count 'G' occurrences after 'A'
            for (let j = i + 1; j < A.length; j++) {
                if (A[j] === 'G') {
                    gCount++;
                }
            }
            // Increment count with the number of 'G' occurrences
            count = (count + gCount) ;
        }
    }

    return count;
}

// Example usage:
const A1 = "ABCGAG";
const A2 = "GAB";

console.log(countAGSubsequences(A1)); // Output: 3
console.log(countAGSubsequences(A2)); // Output: 0

