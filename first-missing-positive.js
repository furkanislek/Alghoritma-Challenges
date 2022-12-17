/* 

Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses constant extra space.

 

Example 1:

Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.
Example 2:

Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.
Example 3:

Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.

*/

var firstMissingPositive = function (nums) {
  var nums = nums.sort((a, b) => a - b);
  var first = 1;
  nums.forEach((element) => {
    if (first == element) {
      first++;
    }
  });

  return first;
};

console.log(
  firstMissingPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 23, 20])
);

console.log(firstMissingPositive([3, 4, -1, 1]));
