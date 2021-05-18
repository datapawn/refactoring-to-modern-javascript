
function rectangleArea(x, y) {
  if (!x) x = 10;
  if (!y) y = x;

  return x * y;
}

function validTriangle(a, b) {
  if (!a) a = 10;
  if (!b) b = a;
  var c = +Math.hypot(a, b).toFixed(2);

  return [a, b, c];
}

function appendToArray(value, arr) {
  if (!arr) arr = [];
  arr.push(value);
  return arr;
}

function add(/** args */) {
  var result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

function multiplyWithFactor(factor /** , nums */) {
  if (!factor) factor = 1;
  // TODO: Find a better way to do this. Here is a helpful link
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  var nums = Array.prototype.slice.call(arguments);
  var result = factor;
  // TODO: Why do we start at 1 here?
  for (var i = 1; i < nums.length; i++) {
    result *= nums[i];
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
