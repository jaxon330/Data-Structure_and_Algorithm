//* tree path finder

/*
Write a function, pathFinder, that takes in the root of a binary tree and a target value. 
The function should return an array representing a path to the target value. 
If the target value is not found in the tree, then return null.

You may assume that the tree contains unique values.
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
const g = new Node("g");
const h = new Node("h");

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
    
//! Recursive solution
const pathFinder = (root, target) => {
    const result = pathFinderHelper(root, target);
    if(result === null) {
    return null;
    } else {
    return result.reverse();
    }
}
const pathFinderHelper = (root, target) => {
    
    if(root === null) return null;
    if(root.val === target) return [ root.val ];
    
    const leftPath = pathFinderHelper(root.left, target);
    if(leftPath !== null) {
    leftPath.push(root.val);
    return leftPath;
    }
    
    const rightPath = pathFinderHelper(root.right, target);
    if(rightPath !== null) {
    rightPath.push(root.val)
    return rightPath
    }
    
    return null;
};

//? n = # of nodes
//? Time: O(n)
//? Space: O(n)

//! Recursive solution with O(n^2) time complexity
// const pathFinder = (root, target) => {
    
//   if(root === null) return null;
//   if(root.val === target) return [ root.val ];
    
//   const leftPath = pathFinder(root.left, target);
//   if(leftPath !== null) {
//     return [root.val, ...leftPath];
//   }
    
//   const rightPath = pathFinder(root.right, target);
//   if(rightPath !== null) {
//     return [root.val, ...rightPath]
//   }
    
//   return null;
// };

//? n = # of nodes
//? Time: O(n^2)
//? Space: O(n)

pathFinder(a, "h"); // -> ['a', 'c', 'f', 'h']
    