//* linked list find
/* 
Write a function, linkedListFind, that takes in the head of a linked list and a target value. 
The function should return a boolean indicating whether or not the linked list contains the target.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

//! Iterative versions
// const linkedListFind = (head, target) => {
//   while(head !== null) {
//     if(head.val === target) {
//       return true;
//     }
//     head = head.next
//   }
//   return false
// };

//? n = numbers of nodes
//? Time: O(n)
//? Space: O(1)

//! Recursive version
const linkedListFind = (head, target) => {
    if(head === null) return false;
    if(head.val === target) return true;
    return linkedListFind(head.next, target)
  };
  
//? n = numbers of nodes
//? Time: O(n)
//? Space: O(n)

linkedListFind(a, "c"); // true