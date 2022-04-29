/**
 * 209. Minimum Size Subarray Sum (Medium)
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

// Sliding window (dynamic width)
var minSubArrayLen = function (target, nums) {
  let start = 0,
    minLen = Number.MAX_SAFE_INTEGER,
    windowSum = 0;

  for (let end = 0; end < nums.length; end++) {
    let currNum = nums[end];
    windowSum += currNum;

    while (windowSum >= target) {
      minLen = Math.min(minLen, end - start + 1);
      windowSum -= nums[start];
      start++;
    }
  }

  if (minLen === Number.MAX_SAFE_INTEGER) return 0;
  return minLen;
};
