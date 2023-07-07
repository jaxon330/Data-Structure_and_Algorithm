//* is univalue list
/* 
Write a function, isUnivalueList, that takes in the head of a linked list as an argument. 
The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

You may assume that the input list is non-empty.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(7);
const b = new Node(7);
const c = new Node(4);

a.next = b;
b.next = c;

// 7 -> 7 -> 4

//! Recursive solution
const isUnivalueList = (head, prevValue = null) => {
    if(head === null) return true;
    if(prevValue !== null && head.val !== prevValue) return false;
    return isUnivalueList(head.next, head.val)
  }
  
  //? n = # of nodes
  //? Time: O(n);
  //? Space: O(n);
  
  
  //! Iterative solution
  // const isUnivalueList = (head) => {
  //   let current = head
  //   while (current !== null) {
  //     if(current.val !== head.val) {
  //       return false;
  //     } 
  //     current = current.next;
  //   }
  //   return true;
  // };
  
  //? n = # of nodes
  //? Time: O(n);
  //? Space: O(1);

  isUnivalueList(a); // true