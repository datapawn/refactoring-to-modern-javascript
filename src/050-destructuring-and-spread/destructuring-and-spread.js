/* eslint-disable arrow-body-style */

const copyArray = (orig = []) => [...orig];

const createArrayFromArg = (...args) => args;

const concatArrays = (arr1 = [], arr2 = []) => [...arr1, ...arr2];

const immutableArrayAppend = (arr = [], ...args) => [...arr, ...args];

const copyObject = (orig) => {
  return {
    ...orig,
  };
};

const objectMerge = (obj1, obj2) => {
  return {
    ...obj1,
    ...obj2,
  };
};

const immutableObjectAppend = (obj, key, value) => {
  const ret = {
    ...obj,
  };
  ret[key] = value;
  return ret;
};

/**
 * Returns the first element of an array, null if arr is undefined or empty
 */
const first = (arr = []) => {
  if (arr.length === 0) return null;
  const [f] = arr;
  return f;
};

const phoneMatcher = (phoneNumber) => {
  const PHONE_MATCH = /^(\d{3})-(\d{3})-(\d{4})$/;
  const [, zip, part1, part2] = PHONE_MATCH.exec(phoneNumber);
  const phone = `${part1}${part2}`;

  return [zip, phone];
};

const celebrate = (obj) => {
  const {
    firstName = 'Ada',
    lastName = 'Lovelace',
    profession = 'Mathematician',
  } = obj;

  return `${firstName} ${lastName} was a famous ${profession}`;
};


// TODO: MAJOR CHALLENGE!!
// Write an algorith that flattens an array
// You will need destructuring in method signatues, as well as within
// the implementation, as well as spreading
// Also, look up
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
const flatten = ([f, ...rest]) => {
  if (f === undefined) return [];
  return !Array.isArray(f)
    ? [f, ...flatten(rest)]
    : [...flatten(f), ...flatten(rest)];
};

export {
  copyArray,
  createArrayFromArg,
  concatArrays,
  immutableArrayAppend,

  copyObject,
  objectMerge,
  immutableObjectAppend,

  first,
  phoneMatcher,
  celebrate,

  flatten,
};
