/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let pointer1 = 0;
  let pointer2 = s.length - 1;

  if (s.length === 1) return true;

  while (pointer1 <= pointer2 && s[pointer1] === s[pointer2]) {
    pointer1++;
    pointer2--;
  }

  if (pointer1 > pointer2) return true;

  if (s[pointer1 + 1] === s[pointer2]) {
    pointer1++;
    while (pointer1 <= pointer2 && s[pointer1] === s[pointer2]) {
      pointer1++;
      pointer2--;
    }
    if (pointer1 > pointer2) return true;
  } else if (s[pointer1] === s[pointer2 - 1]) {
    pointer2--;
    while (pointer1 <= pointer2 && s[pointer1] === s[pointer2]) {
      pointer1++;
      pointer2--;
    }
    if (pointer1 > pointer2) return true;
  }

  return false;
};

let s = `aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga`;
let t = 'cupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuc';
console.log(validPalindrome(s));
// console.log(s.length);
// console.log(s[81]);
