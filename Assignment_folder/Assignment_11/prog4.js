Q3. Find Factorial!

Problem Description
Write a program to find the factorial of the given number A using recursion.

Note: The factorial of a number N is defined as the product of the numbers from 1 to N.


Problem Constraints
0 <= A <= 12



Input Format
First and only argument is an integer A.



Output Format
Return an integer denoting the factorial of the number A.



Example Input
Input 1:

 A = 4
Input 2:

 A = 1


Example Output
Output 1:

 24
Output 2:

 1


Example Explanation
Explanation 1:

 Factorial of 4 = 4 * 3 * 2 * 1 = 24
Explanation 2:

 Factorial of 1 = 1

ans:
function factorial(A) {
    if (A === 0 || A === 1) {
        return 1; // Base case: factorial of 0 or 1 is 1
    } else {
        // Factorial of A = A * factorial of (A - 1)
        return A * factorial(A - 1);
    }
}

// Test cases
console.log(factorial(4)); // Output: 24
console.log(factorial(1)); // Output: 1
