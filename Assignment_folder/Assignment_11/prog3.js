Q4. Print reverse string

Problem Description
Write a recursive function that takes a string, S, as input and prints the characters of S in reverse order.



Problem Constraints
1 <= |s| <= 1000



Input Format
First line of input contains a string S.



Output Format
Print the character of the string S in reverse order.



Example Input
Input 1:

 scaleracademy
Input 2:

 cool


Example Output
Output 1:

 ymedacarelacs
Output 2:

 looc

ans:
function printReverseString(S) {
    if (S.length === 0) {
        return; // Base case: if the string is empty, stop recursion
    } else {
        // Print the last character of the string
        process.stdout.write(S[S.length - 1]);
        // Call the function recursively with the substring excluding the last character
        printReverseString(S.substring(0, S.length - 1));
    }
}

// Test cases
printReverseString("scaleracademy"); // Output: ymedacarelacs
console.log(); // Print newline for separation
printReverseString("cool"); // Output: looc
