//* uncompress
/* 
Write a function, uncompress, that takes in a string as an argument. 
The input string will be formatted into multiple groups according to the following pattern:
<number><char>

for example, '2c' or '3a'.

The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. 
You may assume that the input string is well-formed according to the previously mentioned pattern.
*/

const uncompress = (s) => {
    const nums = '0123456789';
    let result = [];
    let i = 0;
    let j = 0;
    
    while(j < s.length) {
      if (nums.includes(s[j])) {
        j += 1;
      } else {
        let num = Number(s.slice(i, j));
        for (let count = 0; count < num; count += 1){
          result.push(s[j]);
        }
        j += 1;
        i = j;
      }
    }
    
    return result.join('');
  };

    //? n = number of groups
    //? m = max num found in any group
    //? Time: O(n*m)
    //? Space: O(n*m)

    uncompress("2c3a1t"); // -> 'ccaaat'
    uncompress("3n12e2z"); // -> 'nnneeeeeeeeeeeezz'

