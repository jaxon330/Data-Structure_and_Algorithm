//* pair sum
/* 
Write a function, pairSum, that takes in an array and a target sum as arguments. 
The function should return an array containing a pair of indices whose elements sum to the given target. The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair that sums to the target.
*/

// const pairSum = (numbers, targetSum) => {
  
//   for (let i = 0; i< numbers.length; i++) {
//     for (let j = i + 1; j< numbers.length; j++) {
//       if((numbers[i] + numbers[j]) === targetSum) {
//         return [i, j]
//       }
//     }
//   }
// };

// ? Time: O(n2);
//? Space: O(n);

const pairSum = (numbers, targetSum) => {
    const previousNum = {};
    
    for (let i = 0; i< numbers.length; i++) {
      const num = numbers[i];
      const complement = targetSum - num;
      
      if(complement in previousNum) {
        return [i, previousNum[complement]]
      }
      
      previousNum[num] = i;
    }
  };

  //? n = length of array
  // ? Time: O(n);
  //? Space: O(n);

  pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]