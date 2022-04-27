'use strict';

/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function (height) {
  let mxArea;
  let currArea;
  let yAxis;
  let xAxis = height.length - 1;
  let rightPointer = height.length - 1;
  let leftPointer = 0;

  while (leftPointer < rightPointer) {
    let leftValue = height[leftPointer];
    let rightValue = height[rightPointer];

    yAxis = leftValue < rightValue ? leftValue : rightValue;
    currArea = xAxis * yAxis;

    mxArea = mxArea > currArea ? mxArea : currArea;

    if (leftValue < rightValue) {
      leftPointer++;
    } else {
      rightPointer--;
    }
    xAxis--;
  }

  return mxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
