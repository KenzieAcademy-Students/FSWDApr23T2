function greetPerson(name) {
  let newName = name + " bologna";
  return "Hello, " + newName + "!";
}

console.log(greetPerson("Cody"));
console.log(greetPerson("Cody"));
console.log(greetPerson("Cody"));
// console.log(newName);
// let x;
// console.log(x);

const car = {
  make: "Toyota",
  model: "Camry",
};

/**
 * This is called destructuring
 */
const { make, model } = car;

// Destructuring also works with arrays.
const numbers = [1, 2, 3, 4, 5];
const [firstNum, secondNum] = numbers;
console.log(firstNum);
console.log(secondNum);
