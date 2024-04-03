1. Determine if a string/number is a palindrome?
1. function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Check if the string is equal to its reverse
    return str === str.split('').reverse().join('');
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false


function isPalindromeNumber(num) {
    // Convert number to string
    const str = num.toString();
    
    // Check if the string is equal to its reverse
    return str === str.split('').reverse().join('');
}

// Test cases
console.log(isPalindromeNumber(12321)); // Output: true
console.log(isPalindromeNumber(12345)); // Output: false
