//* tree sum

/*
Write a function, treeSum, that takes in the root of a binary tree that contains number values. 
The function should return the total sum of all values in the tree.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

//! Recursive solution
// const treeSum = (root) => {
//   if(root === null) return 0;
//   return root.val += treeSum(root.right) += treeSum(root.left);
// };

//? n = # of nodes
//? Time: O(n);
//? Space: O(n);


//! Iterative solution
// const treeSum = (root) => {
//   if(root === null) return 0;
//   let result = 0;
//   const stack = [root];
//   while(stack.length > 0) {
//     const node = stack.pop();
//     result += node.val;
//     if(node.left !== null) stack.push(node.left);
//     if(node.right !== null) stack.push(node.right);
//   }
//   return result;  
// };

//! Iterative solution using shift method
const treeSum = (root) => {
    if(root === null) return 0;
    
    let result = 0;
    const queue = [root];
    while(queue.length > 0) {
      const node = queue.shift();
      result += node.val;
      if(node.left !== null) queue.push(node.left);
      if(node.right !== null) queue.push(node.right);
    }
    return result;  
  };

//? n = # of nodes
//? Time: O(n);
//? Space: O(n);


treeSum(a); // -> 21

/* Note: this solution should really be considered O(n^2) runtime because the JavaScript shift() methods runs in O(n). JavaScript does not have a native queue data structure that is maximally efficient.Note: this solution should really be considered O(n^2) runtime because the JavaScript shift() methods runs in O(n). 
JavaScript does not have a native queue data structure that is maximally efficient. */