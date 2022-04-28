/**
 * 904. Fruit Into Baskets (Medium)
 * @param {number[]} fruits
 * @return {number}
 */

// Sliding window (dynamic width)
const totalFruit = function (fruits) {
  let max = 0,
    start = 0;
  const basket = {};

  for (let end = 0; end < fruits.length; end++) {
    let basketFruitType = Object.keys(basket).length,
      isFruitInBasket = basket.hasOwnProperty(fruits[end]);
    if (basketFruitType < 2 && !isFruitInBasket) {
      basket[fruits[end]] = true;
      max = Math.max(max, end - start + 1);
    } else if (isFruitInBasket) {
      max = Math.max(max, end - start + 1);
    } else {
      for (let props in basket) {
        delete basket[props];
      }

      basket[fruits[end]] = true;
      basket[fruits[end - 1]] = true;
      start = end - 1;

      while (fruits[start] === fruits[start - 1]) {
        start--;
      }

      max = Math.max(max, end - start + 1);
    }
  }

  return max;
};

console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]));
