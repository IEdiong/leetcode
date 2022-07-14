var missingNumber = function (nums) {
  const numsArr = new Array(nums.length + 1);

  for (let i = 0; i < numsArr.length; i++) {
    numsArr[i] = i;
  }

  //   console.log(numsArr);

  numsArr.forEach((el) => {
    if (!nums.includes(el)) {
      return el;
    }
  });
};

missingNumber([3, 0, 1]);

// Time  - O(n)
// Space - O(n)
