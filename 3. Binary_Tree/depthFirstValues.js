//* depth first values
/*
Write a function, depthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in depth-first order.
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

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

//! Recursive solution
const depthFirstValues = (root) => {
    if(root === null) return [];
    const leftValue = depthFirstValues(root.left);
    const rightValue = depthFirstValues(root.right);
    return [root.val, ...leftValue, ...rightValue]
  };
  
  //? n = number of nodes
  //? Time: O(n)
  //? Space: O(n)
  
  //! Iterative solution 
  // const depthFirstValues = (root) => {
  //   if(root === null) return [];
  //   let result = [];
  //   const stack = [ root ];
   
  //   while(stack.length > 0) {
  //     const node = stack.pop();
  //     result.push(node.val);
      
  //     if(node.right !== null) stack.push(node.right);
  //     if(node.left !== null) stack.push(node.left);
  //   }
  //   return result;
    
  // };
  
  //? n = number of nodes
  //? Time: O(n)
  //? Space: O(n)

depthFirstValues(a); 
//    -> ['a', 'b', 'd', 'e', 'c', 'f']