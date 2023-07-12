//* level averages
/*
Write a function, levelAverages, that takes in the root of a binary tree that contains number values.
The function should return an array containing the average value of each level.
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
const levelAverages = (root) => {
    const levels = [];
    fillLevels(root, levels, 0);
    
    const avgs = [];
    for (let level of levels) {
      avgs.push(avg(level));
    }
    return avgs;
  };
  
  const fillLevels = (root, levels, levelNum) => {
    if (root === null) return;
  
    if (levels.length === levelNum) {
      levels[levelNum] = [root.val];
    } else {
      levels[levelNum].push(root.val);
    }
  
    fillLevels(root.left, levels, levelNum + 1);
    fillLevels(root.right, levels, levelNum + 1);
  };
  
  const avg = (array) => {
    let sum = 0;
    for (let num of array) {
      sum += num;
    }
    return sum / array.length;
  };

//! Iterative solution
// const levelAverages = (root) => {
//     if(root === null) return [];
//     let levels = [];
//     let avgs = []
//     const queue = [{node: root, numLevel: 0}];
    
//     while(queue.length > 0) {
//       const {node, numLevel} = queue.shift();
      
//       if(levels.length === numLevel) {
//         levels[numLevel] = [node.val];
//       } else {
//         levels[numLevel].push(node.val)
//       }
      
//       if(node.left !== null) queue.push({node: node.left, numLevel: numLevel + 1})
//       if(node.right !== null) queue.push({node: node.right, numLevel: numLevel + 1})
//     }
//     for (let level of levels) {
//       avgs.push(avg(level));
//     }
//     return avgs
//   };
//   const avg = (array) => {
//     let sum = 0;
//     for (let num of array) {
//       sum += num;
//     }
//     return sum / array.length;
//   };

  //? n = number of nodes
  //? Time: O(n)  - > O(N) + O(N) = O(N), 
  //? Space: O(n) - > O(N) + O(N) = O(N), 

  levelAverages(a); // -> [ 3, 7.5, 1 ] 