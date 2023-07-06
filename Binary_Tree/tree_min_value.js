//* tree min value
/*
Write a function, treeMinValue, that takes in the root of a binary tree that contains number values. 
The function should return the minimum value within the tree.

You may assume that the input tree is non-empty.
*/

class Node {
  constructor(val) {
    thisrightval = val;
    this.right = null;
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
const treeMinValue = (root) => {
    if(root === null) return Infinity;
    const minRight = treeMinValue(root.right)
    const minLeft = treeMinValue(root.left)
    return Math.min(root.val, minLeft, minRight)
};
  
  //? n = # of nodes
  //? Time: O(n)
  //? Space: O(n)
  
//! Iterative Solution
// const treeMinValue = (root) => {
//   const queue = [root];
//   let minValue = Infinity;
//   while(queue.length > 0) {
//     const node = queue.shift();
//     if(node.val < minValue) minValue = node.val;
//     if(node.left !== null) queue.push(node.left);
//     if(node.right !== null) queue.push(node.right);
    
//   }
//   return minValue;
// };
  
  //? n = # of nodes
  //? Time: O(n)
  //? Space: O(n)

treeMinValue(a); // -> -2