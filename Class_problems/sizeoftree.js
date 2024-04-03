class Stack {
    constructor(capacity) {
        this.myarray = [];
        this.capacity = capacity;
    }

    push(element) {
        if (this.myarray.length < this.capacity)
            this.myarray.push(element);
        else
            console.log("Stack is full");
    }

    pop() {
        if (this.myarray.length !== 0) {
            return this.myarray.pop();
        } else {
            return null; // Return null when stack is empty
        }
    }

    isEmpty() {
        return this.myarray.length === 0;
    }

    size() {
        return this.myarray.length;
    }

    peak() {
        if (this.myarray.length !== 0) {
            return this.myarray[this.myarray.length - 1];
        } else {
            return null; // Return null when stack is empty
        }
    }
}

let mystack = new Stack(10);
mystack.push(9);
console.log(mystack);
console.log("Is stack empty?", mystack.isEmpty());
console.log("Stack size:", mystack.size());
console.log("Top element of the stack:", mystack.peak());
