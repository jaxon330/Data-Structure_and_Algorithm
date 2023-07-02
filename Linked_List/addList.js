//* add list
/*
Write a function, addLists, that takes in the head of two linked lists, each representing a number. 
The nodes of the linked lists contain digits as values. 
The nodes in the input lists are reversed; this means that the least significant digit of the number is the head. 
The function should return the head of a new linked listed representing the sum of the input lists. 
The output list should have its digits reversed as well.

You must do this by traversing through the linked lists once.
Say we wanted to compute 621 + 354 normally. The sum is 975:

   621
 + 354
 -----
   975

Then, the reversed linked list format of this problem would appear as:

    1 -> 2 -> 6
 +  4 -> 5 -> 3
 --------------
    5 -> 7 -> 9
*/

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  const a1 = new Node(1);
  const a2 = new Node(2);
  const a3 = new Node(6);
  a1.next = a2;
  a2.next = a3;
  // 1 -> 2 -> 6
  
  const b1 = new Node(4);
  const b2 = new Node(5);
  const b3 = new Node(3);
  b1.next = b2;
  b2.next = b3;
  // 4 -> 5 -> 3

  //! recursive solution
const addLists = (head1, head2, carry = 0) => {
    if(head1 === null && head2 === null && carry === 0) return null;
    const val1 = head1 === null ? 0 : head1.val;
    const val2 = head2 === null ? 0 : head2.val;
    const sum = val1 + val2 + carry;
    const nextCarry = sum > 9 ? 1 : 0;
    const digit = sum % 10;
    const newNodeList = new Node(digit);
    newNodeList.next = addLists(head1.next, head2.next, nextCarry)
    return console.log(newNodeList);
}

addLists(a1, b1);

//? n = length of list 1
//? m = length of list 2
//? Time: O(max(n, m))
//? Space: O(max(n, m))

//! Iterative solution
// const addLists = (head1, head2) => {
//     const dummyHead = new Node(null);
//     let tail = dummyHead;
    
//     let carry = 0;
//     let current1 = head1;
//     let current2 = head2;
//     while (current1 !== null || current2 !== null || carry !== 0)  {
//       const val1 = current1 === null ? 0 : current1.val;
//       const val2 = current2 === null ? 0 : current2.val;
//       const sum = val1 + val2 + carry;
//       carry = sum > 9 ? 1 : 0;
      
//       const digit = sum % 10;
//       tail.next = new Node(digit);
//       tail = tail.next;
      
//       if (current1 !== null) current1 = current1.next;
//       if (current2 !== null) current2 = current2.next;
//     }
    
//     return dummyHead.next;
//   };

//? n = length of list 1
//? m = length of list 2
//? Time: O(max(n, m))
//? Space: O(max(n, m))