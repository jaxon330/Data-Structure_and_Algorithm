//* breadth first values
/*
Write a function, breadthFirstValues, that takes in the root of a binary tree. 
The function should return an array containing all values of the tree in breadth-first order.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');
const h = new Node('h');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h

//! Iterative solution

const breadthFirstValues = (root) => {
    if(root === null) return [];
    
    const result = []
    const queue = [root];
    
    while (queue.length > 0) {
      const current = queue.shift();
      result.push(current.val)
      if(current.left !== null) queue.push(current.left);
      if(current.right !== null) queue.push(current.right);
    } 
    return result
  };
  
  //? n = # of nodes
  //? Time: O(n)
  //? Space: O(n)

  breadthFirstValues(a);  //   -> ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

  /* Note: this solution should really be considered O(n^2) runtime because the JavaScript shift() methods runs in O(n). 
  JavaScript does not have a native queue data structure that is maximally efficient.*/