 Matrix Multiplication

Problem Description
You are given two integer matrices A(having M X N size) and B(having N X P). You have to multiply matrix A with B and return the resultant matrix. (i.e. return the matrix AB).



Problem Constraints
1 <= M, N, P <= 100

-100 <= A[i][j], B[i][j] <= 100



Input Format
The first argument given is the 2-D integer matrix A.
The second argument given is the 2-D integer matrix B.



Output Format
Return a 2D integer matrix denoting AB.



Example Input
Input 1:

A = [[1, 2],
     [3, 4]]
B = [[5, 6],
     [7, 8]]
Input 2:

A = [[1, 1]]
B = [[2],
     [3]]


Example Output
Output 1:

 [[19, 22],
  [43, 50]]
Output 2:

 [[5]]
ans:
function matrixMultiplication(A, B) {
    const M = A.length; // Number of rows in A
    const N = A[0].length; // Number of columns in A
    const P = B[0].length; // Number of columns in B
    const result = [];

    // Initialize the result matrix with all elements set to 0
    for (let i = 0; i < M; i++) {
        result.push(Array(P).fill(0));
    }

    // Perform matrix multiplication
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < P; j++) {
            for (let k = 0; k < N; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return result;
}

// Test cases
const A1 = [[1, 2], [3, 4]];
const B1 = [[5, 6], [7, 8]];
console.log(matrixMultiplication(A1, B1)); // Output: [[19, 22], [43, 50]]

const A2 = [[1, 1]];
const B2 = [[2], [3]];
console.log(matrixMultiplication(A2, B2)); // Output: [[5]]
