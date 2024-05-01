1. What is the difference between global scope, local scope in JavaScript?

ans:
Global Scope:

Variables and functions defined in the global scope are accessible from anywhere in the code, including within functions, blocks, or other scopes.
Variables declared outside of any function or block have global scope.
Global variables can be accessed and modified from any part of the code, which can lead to potential issues like naming conflicts or unintended side effects.
  
ex:
// Global variable
var globalVar = "I am a global variable";

function foo() {
    console.log(globalVar); // Accessible within functions
}

foo(); // Output: "I am a global variable"


Local Scope:

Variables and functions defined within a function or block have local scope, meaning they are only accessible within that function or block.
Local variables take precedence over global variables with the same name within the same scope.
Local variables are typically used to store temporary data or perform specific tasks within a limited context, without affecting other parts of the code.


ex:
function outerFunction() {
    // Local variable within outerFunction
    var localVar = "I am a local variable";

    function innerFunction() {
        console.log(localVar); // Accessible within innerFunction
    }

    innerFunction();
}

outerFunction(); // Output: "I am a local variable"
