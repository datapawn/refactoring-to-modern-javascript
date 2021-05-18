function add(...args) {
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
}

function multiplyWithFactor(factor = 1, ...nums) {
  // TODO: Find a better way to do this. Here is a helpful link
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  let result = factor;
  // TODO: Why do we start at 1 here?
  for (let i = 0; i < nums.length; i++) {
    result *= nums[i];
  }
  return result;
}

export { add, multiplyWithFactor };
