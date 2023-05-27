 // * * max value

/* TODO: Write a function, maxValue, that takes in array of numbers as an argument. The function should return the largest number in the array.

 Solve this without using any built-in array methods.

 You can assume that the array is non-empty. */


const maxValue = (nums) => {
    let maximum = -Infinity;
    for(let num of nums) {
        if (num > maximum) {
            maximum = num;
        }
    }
    return console.log(maximum);
};

// n = length of array
//? Time: O(n)
//? Space: O(1)

 maxValue([4, 7, 2, 8, 10, 9]); // -> 10
 maxValue([-5, -2, -1, -11]); // -> -1