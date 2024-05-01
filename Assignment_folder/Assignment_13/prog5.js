5) Design and implement queues with below operations with your implemented linked list 
	a) enqueue operation
	b) dequeue operation
	c) front operation
	d) tail operation

ans:
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    dequeue() {
        if (!this.head) {
            return null;
        }
        let removedNode = this.head;
        this.head = this.head.next;
        if (!this.head) {
            this.tail = null;
        }
        this.size--;
        return removedNode.data;
    }

    front() {
        if (!this.head) {
            return null;
        }
        return this.head.data;
    }

    tail() {
        if (!this.tail) {
            return null;
        }
        return this.tail.data;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }
}

// Test the Queue implementation
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("Front of queue:", queue.front()); // Output: 1
console.log("Tail of queue:", queue.tail()); // Output: 3
console.log("Size of queue:", queue.getSize()); // Output: 3
console.log("Dequeued item:", queue.dequeue()); // Output: 1
console.log("Dequeued item:", queue.dequeue()); // Output: 2
console.log("Is queue empty?", queue.isEmpty()); // Output: false
console.log("Size of queue:", queue.getSize()); // Output: 1
console.log("Dequeued item:", queue.dequeue()); // Output: 3
console.log("Is queue empty?", queue.isEmpty()); // Output: true
