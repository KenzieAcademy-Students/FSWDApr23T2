// Object Equality Katas

// All of these functions should be PURE and have NO SIDE EFFECTS.
// Do not modify any of the input objects
// Always create a new array or object when returning
// For all functions, find instructions on MyKenzie.

// There are unit tests in `tests.js`.  These tests will automatically run in the console.

const isTheSameObject = function (a, b) {
  return a === b;
};

const isTheSameObjectShallow = function (a, b) {
  if (a === b) {
    return false;
  }

  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  return aKeys.every(
    (keyInA) => b.hasOwnProperty(keyInA) && a[keyInA] === b[keyInA]
  );
};

const haveSameStructure = function (a, b) {
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  return aKeys.every((key) => b.hasOwnProperty(key));
};

const createShallowCopy = function (object) {
  return { ...object };
};

const combineArrays = function (arrayOne, arrayTwo) {
  // Your Code Here!
  return [...arrayOne, ...arrayTwo];
};

const combineObjects = function (objectOne, objectTwo) {
  // Your Code Here!
  return { ...objectOne, ...objectTwo };
};

const copyObjectAndAddProperty = function (object, property, value) {
  return { ...object, [property]: value };
};

// STRETCH GOALS

const isTheSameObjectDeep = function (a, b) {
  /**
   * Plan of attack
   * 1. If a and b are objects and the same, return false (test dictates otherwise, but i'll leave this in here)
   * 2. Create an array of keys for both a and b
   * 3. If the arrays have different lengths, return false
   * 4. Loop through these keys
   *  4a. If the key from a is not in b return false
   *  4b. If the value of the keys' properties are primitive datatypes:
   *    4bi: If they're equal, continue
   *    4bii: If they're not equal, return false
   *  4c. If the value of the keys' properties are objects:
   *    4ci: call isTheSameObjectDeep, passing a[key] and b[key] in
   */
  // if (a === b) return false;

  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) return false;

  return aKeys.every((key) => {
    if (!b.hasOwnProperty(key)) return false;
    else if (isObject(a[key]) && isObject(b[key])) {
      return isTheSameObjectDeep(a[key], b[key]);
    } else {
      return a[key] === b[key];
    }
  });
};

function isObject(candidate) {
  return typeof candidate === "object";
}

export {
  combineArrays,
  combineObjects,
  copyObjectAndAddProperty,
  createShallowCopy,
  haveSameStructure,
  isTheSameObject,
  isTheSameObjectDeep,
  isTheSameObjectShallow,
};
