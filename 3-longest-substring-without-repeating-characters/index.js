/**
 * 3. Longest Substring Without Repeating Characters (Medium)
 * @param {string} s
 * @return {number}
 */

// Sliding window (dynamic width)
var lengthOfLongestSubstring = function (s) {
  let start = 0,
    longestSubstring = 0;
  const charMap = {};

  for (let end = 0; end < s.length; end++) {
    let char = s[end];

    if (!charMap[char]) {
      charMap[char] = true;
      longestSubstring = Math.max(longestSubstring, end - start + 1);
    } else {
      while (charMap.hasOwnProperty(char)) {
        delete charMap[s[start]];
        start++;
      }
      charMap[char] = true;
    }
  }

  return longestSubstring;
};

console.log(lengthOfLongestSubstring('abcabcbb')); // Output: 3
