// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function (nums) {
    var sortedNums = nums.sort();
    return sortedNums[Math.floor(nums.length / 2)]
//   var obj = {};
//   var max = 0;
//   var maxElement;

//   for (var num of nums) {
//     obj[num] = obj[num] + 1 || 1;
//   }

//   for (num in obj) {
//     if (obj[num] > max) {
//       max = obj[num];
//       maxElement = parseInt(num);
//     }
//   }
//   return maxElement;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([3,2,3]));
