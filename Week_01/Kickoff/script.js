// const content = document.getElementById("content");
// const button = document.getElementById("content-creation");

// button.addEventListener(
//   "click",
//   (e) => (content.innerText = "Welcome to the jungle.")
// );

// // HIGHER ORDER FUNCTIONS:
// // Simply put; functions that accept functions as arguments

// // Common array higher order functions
// const nums = [1, 2, 3, 4, 5, 6, 7];

// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i]);
// }

// nums.forEach((num) => console.log(num));

// content.innerHTML += nums.map((num, i, arr) => `<li>${num}</li>`).join("");

let myApple = {
  color: "red",
  type: "cosmic crisp",
  bitesRemaining: 20,
};

let jonsApple = myApple;

jonsApple.bitesRemaining -= 1;

console.log("MY APPLE: ", myApple);
console.log("JONS APPLE: ", jonsApple);

let myBike = {
  make: "Trek",
  model: "6 Hardtail",
  wheels: {
    make: "IDKWheels",
    tireMaterial: "Vulcanized Rubber",
  },
};

// SHALLOW COPY
// let someOtherRandosBike = { ...myBike };
// myBike.model = "7 hardtail";

// console.log(someOtherRandosBike);
// someOtherRandosBike.wheels.tireMaterial = "Nonvulcanized Rubber";

// console.log("MY BIKE AFTER THEY CHANGED THEIR WHEELS: ", myBike);

// DEEP COPY
let someOtherRandosBike = structuredClone(myBike);
