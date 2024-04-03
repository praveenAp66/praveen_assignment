3. How to find out if the given two strings are anagrams or not?
function areAnagrams(str1, str2) {
    // If the lengths of the strings are different, they cannot be anagrams
    if (str1.length !== str2.length) {
        return false;
    }

    // Create character frequency maps for both strings
    const charFrequency1 = {};
    const charFrequency2 = {};

    // Fill frequency maps for str1
    for (let char of str1) {
        charFrequency1[char] = (charFrequency1[char] || 0) + 1;
    }

    // Fill frequency maps for str2
    for (let char of str2) {
        charFrequency2[char] = (charFrequency2[char] || 0) + 1;
    }

    // Check if the character frequency maps are equal
    for (let char in charFrequency1) {
        if (charFrequency1[char] !== charFrequency2[char]) {
            return false;
        }
    }

    // If all characters have the same frequencies, the strings are anagrams
    return true;
}

// Test cases
console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world")); // Output: false
