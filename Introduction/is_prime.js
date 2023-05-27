//* is prime

/* TODO: Write a function, isPrime, that takes in a number as an argument. The function should return a boolean indicating whether or not the given number is prime.

A prime number is a number that is only divisible by two distinct numbers: 1 and itself.

For example, 7 is a prime because it is only divisible by 1 and 7. For example, 6 is not a prime because it is divisible by 1, 2, 3, and 6.

You can assume that the input number is a positive integer. */
 /* 
11/3 = 3 целых 2 в остатке. Т.е. 11-3*3=2
11%3 = 2 (остаток)
 
27%23 = 1 целое 4 в остатке. Т.е. 27-1*23=4 */


const isPrime = (n) => {
    if(n < 2) return false;
    for (let i = 2; i < n; i++) {
        if(n % i === 0) return false;
    }
    return true;
};

//? n = input number
//? Time: O(sqare_root(n))
//? Space: O(1)

console.log(isPrime(2)); // -> true
console.log(isPrime(1)); // -> false
console.log(isPrime(2017)); // -> true