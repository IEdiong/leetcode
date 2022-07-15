/**
 * 268. Missing number (Easy)
 * @param {number[]} nums
 * @return {number}
 */

// Naive solution
// Time  - O(n)
// Space - O(n)
/*
var missingNumber = function (nums) {
  const numsArr = new Array(nums.length + 1);

  for (let i = 0; i < numsArr.length; i++) {
    numsArr[i] = i;
  }

    console.log(numsArr);

  numsArr.forEach((el) => {
    if (!nums.includes(el)) {
      return el;
    }
  });
};
*/

// Optimized Solution
// Time  - O(n)
// Space - O(1)
/*
const missingNumber = function (nums) {
  let distinctNums = 0,
    rangeNums = 0;
  for (let i = 0; i < nums.length; i++) {
    distinctNums += nums[i];
  }

  for (let j = 0; j < nums.length + 1; j++) {
    rangeNums += j;
  }

  return rangeNums - distinctNums;
};
*/

// Further Optimized Solution with one loop
// Time  - O(n)
// Space - O(1)

const missingNumber = function (nums) {
  let distinctNums = nums.length,
    total = 0;

  for (let i = 0; i < nums.length; i++) {
    total += i - nums[i];
  }

  return total + distinctNums;
};
