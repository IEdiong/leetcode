'use strict';

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortedSquares = function (nums) {
  const arrSquare = new Array(nums.length);
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    let leftSquare = nums[leftPointer] * nums[leftPointer];
    let rightSquare = nums[rightPointer] * nums[rightPointer];

    if (leftSquare >= rightSquare) {
      arrSquare[i] = leftSquare;
      leftPointer++;
    } else {
      arrSquare[i] = rightSquare;
      rightPointer--;
    }
  }

  return arrSquare;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));
