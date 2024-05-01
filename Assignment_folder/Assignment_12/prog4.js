3. Describe the scoping rules for variables declared with var, let, and const.

ans:
var:

Variables declared with var have function scope or global scope, but not block scope. This means that they are accessible within the function or globally, regardless of the block in which they are defined.
If a var declaration is made inside a block (e.g., if, for, while), the variable is hoisted to the top of the function or global scope. However, its value is only assigned when the execution reaches the actual declaration.
Variables declared with var can be redeclared and reassigned within the same scope without any errors.

let:

Variables declared with let have block scope. This means that they are accessible only within the block in which they are defined, such as inside a loop, conditional statement, or function.
Unlike var, let variables are not hoisted to the top of the block. They are only accessible after the point at which they are declared, similar to other programming languages like C++ or Java.
Variables declared with let cannot be redeclared within the same scope, but they can be reassigned.

const:

Variables declared with const also have block scope, similar to let.
const variables, once assigned, cannot be reassigned or redeclared within the same scope. However, they are not immutable; their properties can be modified if they are objects or arrays.
const variables must be initialized with a value at the time of declaration. Trying to declare a const variable without initializing it will result in an error.