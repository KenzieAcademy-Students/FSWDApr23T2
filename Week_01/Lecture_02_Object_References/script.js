let chloeMovie = "The Godfather";
/**
 * When a variable is assigned as the value
 * to another variable, the literal value in the
 * memory stack is what is assigned.
 */
let billyChloeMovie = chloeMovie;

// Two weeks later
chloeMovie = "The Shawshank Redemption";

/**
 * Years later when Billy and Chloe get married
 */

let chloeVehicle = {
  make: "Toyota",
  model: "Sienna",
  color: "Silver",
  safetyFeatures: true,
};
let billyVehicle = chloeVehicle;
let randomGuyVehicle = {
  make: "Toyota",
  model: "Sienna",
  color: "Silver",
  safetyFeatures: true,
};
console.log("Are Chloe Vehicle and Billy Vehicle equal?");
console.log(chloeVehicle === billyVehicle); // true

/**
 * Billy/Chloe Vehicle, and RandomGuyVehicle
 * have the same exact properties and values,
 * but they are not considered the same/equal.
 */
// console.log("Do Chloe and RandomGuy both have cars with the same make?");
// console.log(chloeVehicle.make === randomGuyVehicle.make); // true
// console.log("Do Chloe and RandomGuy both have cars with the same model?");
// console.log(chloeVehicle.model === randomGuyVehicle.model); // true
// console.log("Do Chloe and RandomGuy both have cars with the same color?");
// console.log(chloeVehicle.color === randomGuyVehicle.color); // true
// console.log(
//   "Do Chloe and RandomGuy both have cars with the same safety features?"
// );
// console.log(chloeVehicle.safetyFeatures === randomGuyVehicle.safetyFeatures);

/**
 * This is because, while their properties/values
 * are the same/equal, the variable's value in the
 * memory stack itself (the objects' heap addresses)
 * are not.
 */
// console.log("Do Chloe and RandomGuy both have the same car?");
// console.log(billyVehicle === randomGuyVehicle); // false

/**
 * How do these differences impact how we must approach handling
 * complex data types in JavaScript?
 */
// 1. When two variables reference the same object, any changes
// to one's properties will impact the other's.
billyVehicle.color = "Red";
billyVehicle.decals = "Flames";

console.log("Are Billy's car and Chloe's car still the same?");
console.log(billyVehicle === chloeVehicle);
console.log(
  "So does that mean that Chloe's car now has flames and red paint too?"
);
console.log(chloeVehicle);

// 2. If you need to check if multiple objects share the same information,
// you'll have to check every property one at a time. For example, we
// can compare if two objects are the same by creating an array for
// each object's properties, and the comparing each object's property's
// values against each other. This is what we call a "shallow copy".
function isShallowCopy(obj1, obj2) {
  const obj1Props = Object.keys(obj1); // This turns the properties of obj1 into an array of strings.
  const obj2Props = Object.keys(obj2); // This turns the properties of obj2 into an array of strings.

  // Then, loop through one of the arrays, and check
  // the associated object's value for each property
  // against the value of that same property in the other
  return (
    obj1Props.length === obj2Props.length &&
    obj1Props.every((key) => obj1[key] === obj2[key])
  );
}

// 3. If you need to check if every single property and its nested property's values (and its nested
// property's nested properties, etc. etc.), you need to check if they are DEEP COPIES.
// This is a much more involved task that ultimately relies on recursion.

// 4. If you need to make a shallow copy of an object (or an array), you have several options.
// 1(BAD): Turn the object/array into a JSON string and then convert the string back to a new object
// 2(BAD): Loop through all of the properties and add each property and value to a new object/array
// 3(GOOD): The spread operator.
// Example: Let's make a shallow copy of Chloe's vehicle.
let chloeVehicleCopy = { ...chloeVehicle }; // the three .'s in the curly brackets is the spread operator

// it takes all of the top level properties of chloeVehicle, and "spreads" them into this new object
// initialized by the curly brackets
console.log("Are chloeVehicleCopy and chloeVehicle equal?");
console.log(chloeVehicleCopy === chloeVehicle);
console.log("But is chloeVehicleCopy a shallow copy of chloeVehicle?");
console.log(isShallowCopy(chloeVehicle, chloeVehicleCopy));
console.log("What about after we change something in chloeVehicleCopy");
delete chloeVehicleCopy.decals;
console.log("chloeVehicle: ", chloeVehicle);
console.log("chloeVehicleCopy: ", chloeVehicleCopy);
console.log(isShallowCopy(chloeVehicle, chloeVehicleCopy));

// 5. If you need to make a deep copy of an object (or an array), you're in luck. JavaScript has a
// method that is nearly universally supported now called structuredClone that accepts an object
// and returns a deep copy.
chloeVehicle.safetyFeatures = {
  seatBelts: true,
  backupCamera: true,
  birdsNestCameras: true,
};
let anotherCopy = structuredClone(chloeVehicle);
console.log("anotherCopy:", anotherCopy);
console.log("chloeVehicle:", chloeVehicle);
console.log("but are they shallow copies?");
console.log(isShallowCopy(anotherCopy, chloeVehicle));
console.log("Does this follow the same pattern with using spread?");

let spreadCopy = { ...chloeVehicle };
console.log("spreadCopy:", spreadCopy);
console.log("chloeVehicle:", chloeVehicle);
console.log("And are they shallow copies?");
console.log(isShallowCopy(spreadCopy, chloeVehicle));
console.log(
  "That's because chloeVehicle.safetyFeatures === spreadCopy.safetyFeatures is the same object in memory"
);
console.log(chloeVehicle.safetyFeatures === spreadCopy.safetyFeatures);
console.log(
  "But, anotherCopy.safetyFeatures !== chloeVehicle.safetyFeatures, because it is also a copy"
);
console.log(chloeVehicle.safetyFeatures === anotherCopy.safetyFeatures);
