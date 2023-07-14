//* Leaf list
/*
Write a function, leafList, that takes in the root of a binary tree and returns an array containing the values of all leaf nodes in left-to-right order.
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

// leafList(a); // -> [ 'd', 'e', 'f' ] 

//! Recursive solution

const leafList = (root) => {
    const leaves = [];
    fillLeaves(root, leaves);
    return leaves;
  }
  
  const fillLeaves = (root, leaves) => {
    if(root === null) return;
    if(root.left === null && root.right === null) leaves.push(root.val); 
    fillLeaves(root.left, leaves)
    fillLeaves(root.right, leaves)
  };
  
  //? n = # of nodes
  //? Time: O(n)
  //? Space: O(n)
  
  //! Traversal solution
  // const leafList = (root) => {
  //   if(root === null) return [];
  //   let results = [];
  //   const stack = [root];
  //   while(stack.length > 0) {
  //     const node = stack.pop();
  //     if(node.left === null && node.right === null) results.push(node.val)
  //     if(node.right !== null) stack.push(node.right);
  //     if(node.left !== null) stack.push(node.left);
  //   }
  //   return results;
  // };
  
  //? n = # of nodes
  //? Time: O(n)
  //? Space: O(n)
  

  leafList(a); // -> [ 'd', 'e', 'f' ] 