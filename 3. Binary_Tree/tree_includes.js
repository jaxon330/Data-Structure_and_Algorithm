//* tree includes
/*
Write a function, treeIncludes, that takes in the root of a binary tree and a target value. 
The function should return a boolean indicating whether or not the value is contained in the tree.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

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
const treeIncludes = (root, target) => {
    if(root === null) return false;
    if(root.val === target) return true;
    return treeIncludes(root.right, target) || treeIncludes(root.left, target);
  };
  
  //? n = # of nodes
  //? Time: O(n)
  //? Space: O(n) because we storing and removing our node
  
  //! Iterative solution
  // const treeIncludes = (root, target) => {
  //   if(root === null) return false;
  //   const queue = [root];
    
  //   while (queue.length > 0) {
  //     const node = queue.shift();
  //     if(node.val === target) return true;
  //     if(node.right !== null) queue.push(node.right)
  //     if(node.left !== null) queue.push(node.left)
  //   }
  //   return false;
  // };
  
  //? n = # of nodes
  //? Time: O(n)
  //? Space: O(n)
  

treeIncludes(a, "e"); // -> true