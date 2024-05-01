 What are member functions?
ans:
In JavaScript, the term "member functions" is used to refer to functions that are associated with objects. These functions are also commonly known as methods. When a function is defined as a property of an object, it becomes a member function of that object.

Member functions provide behavior associated with the object and can access and manipulate the object's properties and other methods. They are defined within the object literal notation or added dynamically to an existing object.

Here's an example of an object in JavaScript with member functions:

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    greet: function() {
        return "Hello, my name is " + this.fullName() + ".";
    }
};

console.log(person.fullName()); // Output: "John Doe"
console.log(person.greet()); // Output: "Hello, my name is John Doe."
