/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// Sliding window (Fixed width)
const getAverages = function (nums, k) {
  const avgs = [];
  let start = 0,
    windowSum = 0;

  // Check if we can get a radius of k at any point in the given array nums
  if (2 * k > nums.length - 1) {
    return new Array(nums.length).fill(-1);
  }

  for (let centre = 0; centre < k; centre++) {
    windowSum += nums[centre];
    avgs.push(-1);
  }

  for (let centre = k, end = k; centre < nums.length; end++) {
    windowSum += nums[end];
    if (end - centre === k) {
      if (!(centre + k > nums.length - 1)) {
        avgs.push(Math.trunc(windowSum / (2 * k + 1)));
        windowSum -= nums[start];
        start++;
      } else {
        avgs.push(-1);
      }
      centre++;
    }
  }

  return avgs;
};
