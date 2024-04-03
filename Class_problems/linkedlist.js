// class Node {
//   constructor(data) {
//       this.data = data;
//       this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//       this.head = null;
//   }
//append at last
//   append(data) {
//       const NewNode = new Node(data);

//       if (this.head === null) {
//           this.head = NewNode;
//       } else {
//           let current = this.head;
//           while (current.next !== null) {
//               current = current.next;
//           }
//           current.next = NewNode;
//       }
//   }

//   printList() {
//       let current = this.head;
//       while (current !== null) {
//           console.log(current.data);
//           current = current.next;
//       }
//   }
// }

// // Example usage:

// const linkedList = new LinkedList();
// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);

// console.log("Linked List after appending:");
// linkedList.printList();


  // append at first 
//   class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     append(data) {
//         const newNode = new Node(data);

//         if (this.head === null) {
//             this.head = newNode;
//         } else {
//             newNode.next = this.head;
//             this.head = newNode;
//         }
//     }

//     printList() {
//         let current = this.head;
//         while (current !== null) {
//             console.log(current.data);
//             current = current.next;
//         }
//     }
// }

// // Example usage:

// const linkedList = new LinkedList();
// linkedList.append(2);
// linkedList.append(3);

// console.log("Linked List before appending 5:");
// linkedList.printList();

// linkedList.append(5);

// console.log("\nLinked List after appending 5 before the first node:");
// linkedList.printList();



// append the element at given Data
class Node {
  constructor(data) {
      this.data = data;
      this.next = null;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
  }

  append(data) {
      const newNode = new Node(data);

      if (this.head === null) {
          this.head = newNode;
      } else {
          let current = this.head;
          while (current.next !== null) {
              current = current.next;
          }
          current.next = newNode;
      }
  }

  appendAfter(targetData, newData) {
      const newNode = new Node(newData);

      let current = this.head;

      while (current !== null) {
          if (current.data === targetData) {
              newNode.next = current.next;
              current.next = newNode;
              return;
          }
          current = current.next;
      }

      console.log(`Node with data ${targetData} not found.`);
  }

  printList() {
      let current = this.head;
      while (current !== null) {
          console.log(current.data);
          current = current.next;
      }
  }
}

// Example usage:

const linkedList = new LinkedList();
linkedList.append(2);
linkedList.append(3);

console.log("Linked List before appending 5:");
linkedList.printList();

linkedList.appendAfter(2, 5);

console.log("\nLinked List after appending 5 after node with data 2:");
linkedList.printList();



