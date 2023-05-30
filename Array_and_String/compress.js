//* compress
/* 
Write a function, compress, that takes in a string as an argument.
The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character.
Single character occurrences should not be changed.
'aaa' compresses to '3a'
'cc' compresses to '2c'

You can assume that the input only contains alphabetic characters.
*/

const compress= (s) => {
    let result = [];
    let i = 0;
    let j = 0;

    while(j <= s.length) {
        if(s[j] === s[i]) {
            j += 1;
        } else {
            let num = j - i;
            if(num === 1) {
                result.push(s[i])
            } else {
                result.push(num, s[i]);
            }
            i = j;
        }

    }

    return result.join('');
};

compress('ccaaatsss'); // -> '2c3at3s'
compress('ssssbbz'); // -> '4s2bz'

// ? n = length of string
// ? Time: O(n)
// ? Space: O(n)