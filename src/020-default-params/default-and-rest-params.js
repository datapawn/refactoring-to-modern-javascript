/* eslint-disable no-restricted-syntax, prefer-arrow-callback */
function rectangleArea(x = 10, y = x) {
  return x * y;
}

function validTriangle(a = 10, b = a) {
  const c = +Math.hypot(a, b).toFixed(2);

  return [a, b, c];
}

function appendToArray(value, arr = []) {
  arr.push(value);
  return arr;
}

function add(...nums) {
  return nums.reduce(function sum(acc, n) {
    return acc + n;
  }, 0);
}

function multiplyWithFactor(factor = 1, ...args) {
  let result = factor;
  for (const n of args) {
    result *= n;
  }
  return result;
}

export {
  rectangleArea,
  validTriangle,
  appendToArray,
  add,
  multiplyWithFactor,
};
