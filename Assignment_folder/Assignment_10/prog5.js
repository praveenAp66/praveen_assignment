Q3. Reverse Bits

Problem Description
Reverse the bits of an 32 bit unsigned integer A.



Problem Constraints
0 <= A <= 232



Input Format
First and only argument of input contains an integer A.



Output Format
Return a single unsigned integer denoting the decimal value of reversed bits.



Example Input
Input 1:

 0
Input 2:

 3


Example Output
Output 1:

 0
Output 2:

 3221225472


Example Explanation
Explanation 1:

        00000000000000000000000000000000    
=>      00000000000000000000000000000000
Explanation 2:

        00000000000000000000000000000011    
=>      11000000000000000000000000000000



ans:
function reverseBits(A) {
    let result = 0;
    
    for (let i = 0; i < 32; i++) {
        // Shift the result left to make space for the next bit
        result <<= 1;
        // Extract the least significant bit of A and add it to the result
        result |= A & 1;
        // Right shift A to get the next bit
        A >>= 1;
    }
    
    return result >>> 0; // Convert result to unsigned integer
}

// Test cases
console.log(reverseBits(0)); // Output: 0
console.log(reverseBits(3)); // Output: 3221225472
