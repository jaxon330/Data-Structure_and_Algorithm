//* linked list values
/* 
Write a function, linkedListValues, that takes in the head of a linked list as an argument.
The function should return an array containing all values of the nodes in the linked list.
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
  
  
  //! Iterative solution
  // const linkedListValues = (head) => {
  //   let current = head;
  //   let values = []
  //   while (current !== null) {
  //     values.push(current.val)
  //     current = current.next;
  //   }
  //   return values
  // };
  
  //? n = number of nodes
  //? Time: O(n)
  //? Space: O(n)
  
  //! Recursive solution. we need helper function to solve recursivly
  
  const linkedListValues = (head) => {
    let values = []
    fillValues(head, values);
    return values;
  };
  
  const fillValues = (head, values) => {
    if(head === null) return values;
    values.push(head.val)
    fillValues(head.next, values);
  }
  
  //? n = number of nodes
  //? Time: O(n)
  //? Space: O(n)
  
  console.log(linkedListValues(a)); // -> [ 'a', 'b', 'c', 'd' ]