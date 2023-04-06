// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2**31, 2**31 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

// Constraints:

// -231 <= x <= 231 - 1

var reverse = function (x) {
  let reversedX = Math.abs(x).toString().split("").reverse().join("");
  if (reversedX > 2 ** 31) return 0;
  return reversedX * Math.sign(x);
};

console.log(reverse(-123)); // return -321
console.log(reverse(123)); // return 321
console.log(reverse(2147483648)); // return 0
console.log(reverse(-2147483640)); // return -469847412
