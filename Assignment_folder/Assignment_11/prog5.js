Q1. Sum of Digits!

Problem Description
Given a number A, we need to find the sum of its digits using recursion.


Problem Constraints
1 <= A <= 10^9


Input Format
The first and only argument is an integer A.


Output Format
Return an integer denoting the sum of digits of the number A.


Example Input
Input 1:

 A = 46
Input 2:

 A = 11


Example Output
Output 1:

 10
Output 2:

 2


Example Explanation
Explanation 1:

 Sum of digits of 46 = 4 + 6 = 10
Explanation 2:

 Sum of digits of 11 = 1 + 1 = 2
  
ans:
function sumOfDigits(A) {
    if (A < 10) {
        return A; // Base case: if A is a single digit, return A
    } else {
        // Extract the last digit of A and add it to the sum of digits of the remaining number
        return A % 10 + sumOfDigits(Math.floor(A / 10));
    }
}

// Test cases
console.log(sumOfDigits(46)); // Output: 10
console.log(sumOfDigits(11)); // Output: 2
