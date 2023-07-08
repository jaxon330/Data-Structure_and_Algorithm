//* tree value count
/*
Write a function, treeValueCount, that takes in the root of a binary tree and a target value. 
The function should return the number of times that the target occurs in the tree.
*/

class Node {
    constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    }
}

const a = new Node(12);
const b = new Node(6);
const c = new Node(6);
const d = new Node(4);
const e = new Node(6);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12
//    /   \
//   6     6
//  / \     \
// 4   6     12

//! Recursive solution
const treeValueCount = (root, target) => {
    if(root === null) return 0;
    const match = root.val === target ? 1 : 0;
    return match + treeValueCount(root.right, target) + treeValueCount(root.left, target);
};
//? n = # of nodes
//? Time: O(n)
//? Space: O(n)

//! Traversal solution  breadth first

// const treeValueCount = (root, target) => {
//   if(root === null) return 0;
//   const queue = [ root ];
//   let count = 0;
//   while(queue.length > 0) {
//     const node = queue.shift()
//     if(node.val === target) count += 1;
//     if(node.right !== null) queue.push(node.right)
//     if(node.left !== null) queue.push(node.left)
//   }
//   return count;
// };
//? n = # of nodes
//? Time: O(n)
//? Space: O(n)

treeValueCount(a,  6); // -> 3