7. search function foe string without using an buiklt in function

function searchString(string, substring) {
    for (let i = 0; i <= string.length - substring.length; i++) {
        let found = true;
        for (let j = 0; j < substring.length; j++) {
            if (string[i + j] !== substring[j]) {
                found = false;
                break;
            }
        }
        if (found) {
            return i; // Return the starting index of the substring
        }
    }
    return -1; // Return -1 if the substring is not found
}

// Example usage:
let string = "Hello, world!";
let substring = "world";
let index = searchString(string, substring);
if (index !== -1) {
    console.log("Substring found at index:", index);
} else {
    console.log("Substring not found.");
}