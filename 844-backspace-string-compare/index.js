/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
844. Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

s = "ab#c", t = "ad#c"
s = "ab##", t = "c#d#"
s = "xywrrmp", t = "xywrrmu#p"
s = "y#fo##f", t = "y#f#o##f"
s = "bbbextm", t = "bbb#extm"
s = "a#c###", t = "ad#c"
 */

// O(n) Space & O(n + m) Time
// const backspaceCompare = function (s, t) {
//   const sStack = [];
//   const tStack = [];

//   let sPointer = 0;
//   let tPointer = 0;

//   while (sPointer < s.length) {
//     if (s[sPointer] === '#') {
//       if (sStack.length > 0) {
//         sStack.pop();
//       }
//       sPointer++;
//     } else {
//       sStack.push(s[sPointer]);
//       sPointer++;
//     }
//   }

//   while (tPointer < t.length) {
//     if (t[tPointer] === '#') {
//       if (tStack.length > 0) {
//         tStack.pop();
//       }
//       tPointer++;
//     } else {
//       tStack.push(t[tPointer]);
//       tPointer++;
//     }
//   }

//   //   comparing sStack with tStack
//   if (sStack.length !== tStack.length) {
//     return false;
//   } else {
//     for (let i = 0; i < sStack.length; i++) {
//       if (sStack[i] !== tStack[i]) {
//         return false;
//       }
//     }
//     return true;
//   }

//   //   console.log('sStack:', sStack, 'vs', 'tStack:', tStack);
// };

// O(1) Space & O(n + m) Time
const backspaceCompare = (s, t) => {
  let sPointer = s.length - 1;
  let tPointer = t.length - 1;

  while (sPointer >= 0 || tPointer >= 0) {
    let bCounter = 0;
    while (sPointer >= 0 && (bCounter > 0 || s[sPointer] === '#')) {
      if (s[sPointer] === '#') {
        bCounter++;
      } else {
        bCounter--;
      }
      sPointer--;
    }
    if (sPointer < 0) {
      bCounter = 0;
    }

    while (tPointer >= 0 && (bCounter > 0 || t[tPointer] === '#')) {
      if (t[tPointer] === '#') {
        bCounter++;
      } else {
        bCounter--;
      }
      tPointer--;
    }
    if (tPointer < 0) {
      bCounter = 0;
    }

    if (sPointer >= 0 && tPointer >= 0) {
      if (s[sPointer] !== t[tPointer]) {
        return false;
      } else {
        sPointer--;
        tPointer--;
      }
    } else {
      if (sPointer >= 0 || tPointer >= 0) {
        return false;
      }
    }
  }
  return true;
};

let s = 'a#c###';
let t = 'ad#c';

console.log(backspaceCompare(s, t));
// backspaceCompare(s, t);
