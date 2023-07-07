//* intersection
/* 
Write a function, intersection, that takes in two arrays, a,b, as arguments. 
The function should return a new array containing elements that are in both of the two arrays.

You may assume that each input array does not contain duplicate elements.
*/

//! Solution 1
// const intersection = (a, b) => {
//   let result = []
//   for (let i of a) {
//     if(b.includes(i)) {
//       result.push(i)
//     }
//   }
//   return result
// };

//! Solution 2
// const intersection = (a, b) => {
//   let result = []
//   for (let i of a) {
//     for(let j of b) {
//       if (i === j) {
//         result.push(i)
//       }
//     }
//   }

//   return result
// };

//? n = length of array 1
//? m = length of array 2
//? Time: O(n2);
//? Space: O(min(n, m))
//? this solution works but it's too slow


//! solution 3
const intersection = (a, b) => {
    const num = new Set(a);
    let result = []
    for (let i of b) {
      if(num.has(i)) {
        result.push(i)
      }
    }
    
    return result;
    
  };
  
  //? n = length of array 1
  //? m = length of array 2
  //? Time: O(n+m);
  //? Space: O(n);
  
intersection([4,2,1,6], [3,6,9,2,10]) // -> [2,6]