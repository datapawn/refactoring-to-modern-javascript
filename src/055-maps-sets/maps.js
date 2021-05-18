// TODO: Implement this
// Return a map with 3 entries
// 614 -> 'Ohio'
// 303 -> 'Colorado'
// 209 -> 'California'
function areaCodeToCity() {
  return new Map([614, "Ohio"], [303, "Colorado"], [209, "California"]);
}

// TODO: Implement this
// You will be passed an ARRAY of two-item
// tuples, like so [[1, 'ek'], [2, 'do'] ... ]
// Return a map with those as the individual entries

// function mapFromIterable(arr) {
//   return new Map([arr]);
// }

const mapFromiterable = (...args) => new Map(args);

// TODO: Implement this
// Given a map m, and a key and value, this should RETURN A NEW
// MAP with ALL the keys (including the new one)
// ONLY if the map does NOT have supplied key.
// Else just return a new Map constructed from m
// function addToMap(m, key, value) {}

const addToMap = (m, key, value) => {
  return new Map([[key, value], ...m.entries()]);
};

export { areaCodeToCity, mapFromIterable, addToMap };
