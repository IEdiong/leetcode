/**
 * 125. Valid Palindrome (Easy)
 * @param {string} s
 * @return {boolean}
 */

const isPalindrome = function (s) {
  let str = s
    .toLowerCase()
    .split(' ')
    .join('')
    .replace(/[^a-z0-9]/g, '');
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    } else {
      start++;
      end--;
    }
  }

  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('0P'));
