// get node value
/*
Write a function, getNodeValue, that takes in the head of a linked list and an index. 
The function should return the value of the linked list at the specified index.

If there is no node at the given index, then return null.
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
  
  //! Recursive solution
  const getNodeValue = (head, index) => {
    if(head === null) return null
    if(index === 0) return head.val
    return getNodeValue(head.next, index -=1)
  };
  
  //? n = number of nodes
  //? Time: O(n)
  //? Space: O(n)
  
  
  //! Iterative solution
  // const getNodeValue = (head, index) => {
  // let i = 0;
  //   while(head !== null) {
  //     if(i === index) return head.val
  //     i += 1;
  //     head = head.next
  //   }
  //   return null
  // };
  
  //? n = number of nodes
  //? Time: O(n)
  //? Space: O(1)

  getNodeValue(a, 2); // 'c'