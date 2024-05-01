Q2. Add Binary Strings

Problem Description
Given two binary strings A and B. Return their sum (also a binary string).


Problem Constraints
1 <= length of A <= 105

1 <= length of B <= 105

A and B are binary strings



Input Format
The two argument A and B are binary strings.



Output Format
Return a binary string denoting the sum of A and B



Example Input
Input 1:
A = "100"
B = "11"
Input 2:
A = "110"
B = "10"


Example Output
Output 1:
"111"
Output 2:
"1000"


Example Explanation
For Input 1:
The sum of 100 and 11 is 111.
For Input 2:
 
The sum of 110 and 10 is 1000.


ans:
function addBinaryStrings(A, B) {
    let result = "";
    let carry = 0;
    let i = A.length - 1;
    let j = B.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        let sum = carry;

        if (i >= 0) {
            sum += parseInt(A[i]);
            i--;
        }

        if (j >= 0) {
            sum += parseInt(B[j]);
            j--;
        }

        result = (sum % 2) + result; // Append the least significant bit of the sum
        carry = Math.floor(sum / 2); // Update the carry
    }

    return result;
}

// Test cases
console.log(addBinaryStrings("100", "11")); // Output: "111"
console.log(addBinaryStrings("110", "10")); // Output: "1000"
