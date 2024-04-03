Q3. Column Sum

Problem Description
You are given a 2D integer matrix A, return a 1D integer array containing column-wise sums of original matrix.



Problem Constraints
1 <= A.size() <= 10^3

1 <= A[i].size() <= 10^3

1 <= A[i][j] <= 10^3



Input Format
First argument is a 2D array of integers.(2D matrix).



Output Format
Return an array containing column-wise sums of original matrix.



Example Input
Input 1:

[1,2,3,4]
[5,6,7,8]
[9,2,3,4]


Example Output
Output 1:

{15,10,13,16}


Example Explanation
Explanation 1

Column 1 = 1+5+9 = 15
Column 2 = 2+6+2 = 10
Column 3 = 3+7+3 = 13
Column 4 = 4+8+4 = 16


ans:
function columnSum(A) {
    const numRows = A.length;
    const numCols = A[0].length;
    const result = [];

    // Iterate over each column
    for (let j = 0; j < numCols; j++) {
        let sum = 0;
        
        // Iterate over each row and sum the elements in the column
        for (let i = 0; i < numRows; i++) {
            sum += A[i][j];
        }
        
        // Push the sum to the result array
        result.push(sum);
    }

    return result;
}

// Test case
const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 2, 3, 4]
];
console.log(columnSum(matrix)); // Output: [15, 10, 13, 16]
