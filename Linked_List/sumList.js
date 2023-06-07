//* sum list
/*
Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. 
The function should return the total sum of all values in the linked list.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// 2 -> 8 -> 3 -> -1 -> 7

//! Iterative version
// const sumList = (head) => {
//   let result = 0;
//   while(head !== null) {
//     result += head.val;
//     head = head.next
//   }
//   return result;
// };

//? n = number of nodes
//? Time: O(n)
//? Space: O(1) - because we are using only one variable every time

//! Recursive version
const sumList = (head) => {
    if(head === null) return 0;
    return head.val += sumList(head.next)
  };
  
  //? n = number of nodes
  //? Time: O(n)
  //? Space: O(n) - recursive version uses n space because we have to add every function call onto the call stack
  

  sumList(a); // 19