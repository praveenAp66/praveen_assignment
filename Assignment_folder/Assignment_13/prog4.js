3) Design and implement stack with below operations with your implemented linked list 
	a) push operation
	b) pop operation
	c) top operation

ans:
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(data) {
        let newNode = new Node(data);
        if (!this.top) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.size++;
    }

    pop() {
        if (!this.top) {
            return null;
        }
        let removedNode = this.top;
        this.top = this.top.next;
        this.size--;
        return removedNode.data;
    }

    top() {
        if (!this.top) {
            return null;
        }
        return this.top.data;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }
}

// Test the Stack implementation
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Top of stack:", stack.top()); // Output: 3
console.log("Size of stack:", stack.getSize()); // Output: 3
console.log("Popped item:", stack.pop()); // Output: 3
console.log("Popped item:", stack.pop()); // Output: 2
console.log("Is stack empty?", stack.isEmpty()); // Output: false
console.log("Size of stack:", stack.getSize()); // Output: 1
console.log("Popped item:", stack.pop()); // Output: 1
console.log("Is stack empty?", stack.isEmpty()); // Output: true
