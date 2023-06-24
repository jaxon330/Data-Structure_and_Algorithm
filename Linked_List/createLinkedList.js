//* create linked list
/*
Write a function, createLinkedList, that takes in an array of values as an argument. 
The function should create a linked list containing each element of the array as the values of the nodes. 
The function should return the head of the linked list.
*/

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  
    
  //! Recursive solution with O(n) time and O(n) space
  const createLinkedList = (values, i = 0) => {
    if(i === values.length) return null;
    const head = new Node(values[i]);
    head.next = createLinkedList(values, i + 1)
    return head;
  };
  
  //! Recursive solution
  // const createLinkedList = (values) => {
  //   if(values.length === 0) return null;
  //   const head = new Node(values[0]);
  //   head.next = createLinkedList(values.slice(1))
  //   return head;
  // };
  
  //? n = # of nodes
  //? Time: O(n^2) why it is n^2 because we are doing n recursive calls and we also doing slice operation which creates copy of the array so that must actually consume some additional time.
  //? It would be the case that just this expression of doing a slice that would actually be n steps.
  //? Space: O(n)
  
  //! Iterative solution
  // const createLinkedList = (values) => {
  //   const dummyHead = new Node(null);
  //   let tail = dummyHead;
    
  //   for(let val of values) {
  //     tail.next = new Node(val);
  //     tail = tail.next
  //   }
    
  //   return dummyHead.next
  // };
  
  //? n = # of nodes
  //? Time: O(n)
  //? Space: O(n)

createLinkedList(["h", "e", "y"]);
// h -> e -> y

createLinkedList(["a"]);
// a