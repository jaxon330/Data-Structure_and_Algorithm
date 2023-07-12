//* tree levels
/*
Write a function, treeLevels, that takes in the root of a binary tree. 
The function should return a 2-Dimensional array where each subarray represents a level of the tree.
*/

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

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const treeLevels = (root) => {
    const levels = [];
    _treeLevels(root, levels, 0);
    return levels;
  };
  
  const _treeLevels = (root, levels, levelNum) => {
    if (root === null) return;
  
    if (levels.length === levelNum) {
      levels[levelNum] = [root.val];
    } else {
      levels[levelNum].push(root.val);
    }
  
    _treeLevels(root.left, levels, levelNum + 1);
    _treeLevels(root.right, levels, levelNum + 1);
  };

    //? n = number of nodes
    //? Time: O(n)
    //? Space: O(n)

//! depth first (iterative)
// const treeLevels = (root) => {
//     if(root === null) return [];
//     const stack = [{ node: root, numLevel: 0 }];
//     let levels = [];
//     while(stack.length > 0) {
//       const {node, numLevel} = stack.pop()
//       if(levels.length === numLevel) {
//         levels[numLevel] = [node.val];
//       } else {
//         levels[numLevel].push(node.val)
//       }
//       if(node.right !== null) stack.push({node: node.right, numLevel: numLevel + 1})
//       if(node.left !== null) stack.push({node: node.left, numLevel: numLevel + 1})
      
//     }
//     return levels;
//   };

    //? n = number of nodes
    //? Time: O(n)
    //? Space: O(n)


  treeLevels(a); // ->
// [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f']
// ]