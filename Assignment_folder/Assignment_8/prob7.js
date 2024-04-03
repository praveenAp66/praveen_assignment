7. Substring search - Given a string, find the pattern provide by user? if yes, print the index of the substring else print -1
function findSubstringIndex(text, pattern) {
    return text.indexOf(pattern);
}

// Test case
const text = "hello world";
const pattern = "world";
const index = findSubstringIndex(text, pattern);
console.log("Substring Index:", index !== -1 ? index : -1);
