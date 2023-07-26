// const names = [
//   "Alexis",
//   "Karen",
//   "Catherine",
//   "Mireille",
//   "Nick",
//   "George",
//   "Amy",
// ];

// function welcomeLearners(learners) {
//   for (let i = 0; i < learners.length; i++) {
//     console.log(`Welcome, ${learners[i]}`);
//   }
// }

// welcomeLearners(names);

// const heroes = [
//   { name: "Batman", alterEgo: "Bruce Wayne" },
//   { name: "Superman", alterEgo: "Clark Kent" },
//   { name: "Black Widow", alterEgo: "Natasha Romanov" },
//   { name: "Captain Marvel", alterEgo: "Carol Danvers" },
// ];

// function populateHeroesList(heroes) {
//   const list = document.getElementById("heroes");
//   let listItems = "";
//   for (let i = 0; i < heroes.length; i++) {
//     listItems += `<li>${heroes[i].name}, a.k.a. ${heroes[i].alterEgo}</li>`;
//   }
//   list.innerHTML = listItems;
// }

// populateHeroesList(heroes);

/**
 * HIGHER ORDER FUNCTIONS:
 * Functions that accept callbacks as parameters (i.e. a function that
 * accepts and runs another function that is passed as one of its
 * parameters)
 */

const names = [
  "Alexis",
  "Karen",
  "Catherine",
  "Mireille",
  "Nick",
  "George",
  "Amy",
];

// const numbers = [1, 2, 3, 4, 5, 6, 8, 9, 10];

// function printNumbers(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i]);
//   }
// }
/**
 * Arrow functions
 * Useful for:
 * - Functions returning a boolean result
 * - Functions returning a mathematical operation result
 * - Functions simply convert and return data
 * - Callback functions where any of the above criteria are met (of course, not limited
 * to just those 3)
 */

/**
 * .forEach()
 * Higher order array method that allows a developer
 * to do something for each element in an array
 */
// Replacing welcomeLearners:
function welcomeLearners(learners) {
  for (let i = 0; i < learners.length; i++) {
    console.log(`Welcome, ${learners[i]}`);
  }
}
// welcomeLearners(names);

// names.forEach((name) => console.log(name));

// Replacing printHeroInfo
const heroes = [
  { name: "Batman", alterEgo: "Bruce Wayne" },
  { name: "Superman", alterEgo: "Clark Kent" },
  { name: "Black Widow", alterEgo: "Natasha Romanov" },
  { name: "Captain Marvel", alterEgo: "Carol Danvers" },
];

// function printHeroInfo(heroes) {
//   for (let i = 0; i < heroes.length; i++) {
//     console.log(`${heroes[i].name}, a.k.a. ${heroes[i].alterEgo}`);
//   }
// }

// Using a pre-defined function as a callback
// function printSingleHero(hero) {
//   console.log(`${hero.name}, a.k.a. ${hero.alterEgo}`);
// }
// heroes.forEach(printSingleHero);

// Using an arrow function as a callback
// heroes.forEach((hero) => console.log(`${hero.name}, a.k.a. ${hero.alterEgo}`));

// Replacing printNumbers
const numbers = [1, 2, 3, 4, 5, 6, 8, 9, 10];

function printNumbers(nums) {
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
  }
}

// numbers.forEach((num) => console.log(num));

// X-Ray specs: What does .forEach() method look like inside?
function xRayForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

/**
 * .map() - The map method will create a new array, and populate
 * it with the result of each call made to your callback function
 */

// EXAMPLE: Given an array of numbers, return a NEW array of those numbers squared
// i.e.: [1, 2, 3, 4, 5] ==> [1, 4, 9, 16, 25]

const nums = [1, 2, 3, 4, 5];
const squares = nums.map((num) => num * num);
console.log("ORIGINAL NUMBERS:", nums);
console.log("SQUARE OF NUMBERS:", squares);

// EXAMPLE 2: Given an array of user objects, return an array of
// their full names
// i.e. users (below) ==> [ "Bob Humanperson", "Lady Personhuman", "Greg Smith", "Totallynot Arobot"]
const users = [
  { firstName: "Bob", lastName: "Humanperson", registrationComplete: false },
  { firstName: "Lady", lastName: "Personhuman", registrationComplete: false },
  { firstName: "Greg", lastName: "Smith", registrationComplete: false },
  { firstName: "Totallynot", lastName: "Arobot", registrationComplete: false },
];

const fullNames = users.map(
  (user, i) => `${i + 1}. ${user.firstName} ${user.lastName}`
);
console.log("USERS:", users);
console.log("FULL NAMES:", fullNames);

// X RAY SPECS: What does .map() look like inside?
function xRayMap(arr, callback) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i], i, arr);
    output.push(result);
  }
  return output;
}

/**
 * .find() and .filter() - Both methods will find elements in the called array
 * that pass the callback test (i.e. the callback returns true).
 * Differences:
 *  - .find() - just returns the FIRST element that passes. Returns null if no element found
 *  - .filter() - returns an ARRAY of ALL elements that pass. Returns an empty array if no element found
 */

// EXAMPLE 1: Use .find() to get the first hero in the array whose name
// starts with the letter "B"

const firstBName = heroes.find((hero) => hero.name[0].toLowerCase() === "b");
console.log("First hero with name starting with B:", firstBName);

// EXAMPLE 2: User .filter() to get ALL heroes in the array whose name
// starts with the letter "B"
const allBNames = heroes.filter((hero) => hero.name[0].toLowerCase() === "b");
console.log("All heroes with name starting with B:", allBNames);

// X RAY SPECS: .find() and .filter()
function xRayFind(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return arr[i];
    }
  }
  return null;
}
function xRayFilter(arr, callback) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      output.push(arr[i]);
    }
  }
  return output;
}

/**
 * .some() - to find if some element in an array passes the callback.
 * - Returns true as soon as it finds a single element that passes.
 * - Returns false if no element passes.
 */
const isBillGatesInMyClass = names.some((learner) => learner === "Bill Gates");
console.log("T or F: Bill Gates is in my class!", isBillGatesInMyClass);

const isEveryStudentReallyNotBillGates = names.every(
  (learner) => learner !== "Bill Gates"
);
console.log(
  "T or F: Every single student is, in fact, not Bill Gates. ",
  isEveryStudentReallyNotBillGates
);

/**
 * .every() - to find if ALL elements in an array pass the callback.
 * - Return true if every element passes.
 * - Return false as soon as it finds a single element that DOES NOT pass.
 */

/**
 * .reduce()
 */

const nonANames = names
  .filter((name) => name[0].toLowerCase() !== "a")
  .map((name) => `${name} does not start with "A"`);

console.log(nonANames);
