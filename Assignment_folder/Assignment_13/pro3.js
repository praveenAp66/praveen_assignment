4) Design and implement queues with below operations with array
	a) enqueue operation
	b) dequeue operation
	c) front operation
	d) tail operation


ans:
class queue {
    constructor(capacity) {
        this.myarray = [];
        this.capacity = capacity;
    }

    enqueue(element) {
        if (this.myarray.length < this.capacity)
            this.myarray.push(element);
        else
            console.log("queue is full");
    }

    dequeue() {
        if (this.myarray.length !== 0) {
            return this.myarray.shift();
        } else {
            return null; // Return null when queue is empty
        }
    }
  
}

let myqueue = new queue(10);
myqueue.enqueue(9);
myqueue.enqueue(3)
myqueue.enqueue(7)
myqueue.dequeue()
console.log(myqueue);

