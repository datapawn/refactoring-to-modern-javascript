// function copyArray(orig = []) {
//   const ret = [...orig];
//   return ret;
// }

const copyArray = (orig = []) => [...orig];

// function createArrayFromArg() {
//   let ret = [...arguments];
//   return ret;
// }

// function createArrayFromArg(...args) {
//   return args;
// }

const createArrayFromArg = (...args) => [...args];

function concatArrays(arr1, arr2) {
  var ret = [];
  ret.push(...arr1);
  ret.push(...arr2);
  return ret;
}

// function immutableArrayAppend(arr /* ,args */) {
//   // TODO: Implement this
//   // immutableArrayAppend([1, 2, 3, 4], 5, 6, 7, 8)
//   // should return a *NEW* array that contains
//   // [1, 2, 3, 4, 5, 6, 7, 8]
// }

//why does this not work?
// function immutableArrayAppend = (arr, ...args) => [...arr, ...args];

// function copyObject(orig) {
//   var ret = {};
//   if (!orig) return ret;
//   for (var key in orig) {
//     if (Object.prototype.hasOwnProperty.call(orig, key)) {
//       ret[key] = orig[key];
//     }
//   }
//   return ret;
// }

const copyObject = (orig) => ({ ...orig });

// function objectMerge(obj1, obj2) {
//   var ret = {};
//   for (var key in obj1) {
//     if (Object.prototype.hasOwnProperty.call(obj1, key)) {
//       ret[key] = obj1[key];
//     }
//   }
//   for (var key in obj2) {
//     if (Object.prototype.hasOwnProperty.call(obj2, key)) {
//       ret[key] = obj2[key];
//     }
//   }
//   return ret;
// }

function objectMerge(obj1, obj2) {
  return {
    ...obj1,
    ...obj2,
  };
}

function immutableObjectAppend(obj, key, value) {
  // TODO: Implement this
  // immutableObjectAppend({name:'raju'}, 'profession', 'programmer')
  // should return a *NEW* object that contains two keys
  // {name: 'raju', 'profession': 'programmer'}
  // TODO: Ask me about using [] within the literal object here
}

/**
 * Returns the first element of an array, null if arr is undefined or empty
 */
function first(arr) {
  if (!arr || arr.length === 0) return null;
  return arr[0];
}

function phoneMatcher(phoneNumber) {
  var PHONE_MATCH = /^(\d{3})-(\d{3})-(\d{4})$/;
  var match = PHONE_MATCH.exec(phoneNumber);
  var zip = match[1];
  var phone = match[2] + match[3];

  return [zip, phone];
}

function celebrate(obj) {
  var firstName = obj.firstName ? obj.firstName : "Ada";
  var lastName = obj.lastName ? obj.lastName : "Lovelace";
  var profession = obj.profession ? obj.profession : "Mathematician";

  return `${firstName} ${lastName} was a famous ${profession}`;
}

// TODO: MAJOR CHALLENGE!!
// Write an algorith that flattens an array
// You will need destructuring in method signatues, as well as within
// the implementation, as well as spreading
// Also, look up
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
const flatten = (arr) => {};

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
