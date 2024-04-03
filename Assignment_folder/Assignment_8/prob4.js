4. How do you calculate the number of vowels and consonants in a String?
function countVowelsAndConsonants(str) {
    // Convert the string to lowercase to simplify comparison
    str = str.toLowerCase();
    
    // Initialize counters for vowels and consonants
    let vowelsCount = 0;
    let consonantsCount = 0;
    
    // Define a regular expression to match vowels
    const vowelsRegex = /[aeiou]/;

    // Iterate through each character of the string
    for (let char of str) {
        // Check if the character is a vowel
        if (vowelsRegex.test(char)) {
            vowelsCount++;
        } else if (char >= 'a' && char <= 'z') { // Check if the character is a consonant
            consonantsCount++;
        }
    }

    return { vowels: vowelsCount, consonants: consonantsCount };
}

// Test case
const counts = countVowelsAndConsonants("Hello World");
console.log("Vowels:", counts.vowels); // Output: 3
console.log("Consonants:", counts.consonants); // Output: 7
