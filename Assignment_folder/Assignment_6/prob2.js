Q1. Amazing Subarrays

You are given a string S, and you have to find all the amazing substrings of S.

An amazing Substring is one that starts with a vowel (a, e, i, o, u, A, E, I, O, U).

Input

Only argument given is string S.

Output

Return a single integer X mod 10003, here X is the number of Amazing Substrings in given the string.
Constraints

1 <= length(S) <= 10^6
S can have special characters
Example

Input
    ABEC

Output
    6

Explanation
    Amazing substrings of given string are :
    1. A
    2. AB
    3. ABE
    4. ABEC
    5. E
    6. EC
    here number of substrings are 6 and 6 % 10003 = 6.



ans:
function countAmazingSubstrings(S) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let count = 0;

    for (let i = 0; i < S.length; i++) {
        if (vowels.has(S[i])) {
            // If the character is a vowel, then all substrings starting from this index
            // until the end of the string are amazing substrings.
            count = (count + S.length - i) % 10003;
        }
    }

    return count;
}

// Test
console.log(countAmazingSubstrings("ABEC")); // Output: 6


