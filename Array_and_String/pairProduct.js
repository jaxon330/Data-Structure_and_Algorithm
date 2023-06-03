//* pair product
/* 
Write a function, pairProduct, that takes in an array and a target product as arguments. 
The function should return an array containing a pair of indices whose elements multiply to the given target. 
The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair whose product is the target.
*/

const pairProduct = (numbers, targetProduct) => {
    // for (let i = 0; i < numbers.length; i += 1) {
    //   for(let j = i + 1; j < numbers.length; j += 1) {
    //     if((numbers[i] * numbers[j]) === targetProduct) {
    //       return [i, j]
    //     }
    //   }
    // }
    
    //? n = length of array
    //? Time: O(n2)
    //? Space:O(n)
    
    let previousNum = {}
    for (let i = 0; i < numbers.length; i += 1) {
      let num = numbers[i];
      let complement = targetProduct / num;
      if(complement in previousNum) {
        return [i, previousNum[complement]]
      }
      previousNum[num] = i;
    }
  
  };
  
    //? n = length of array
    //? Time: O(n)
    //? Space:O(n)