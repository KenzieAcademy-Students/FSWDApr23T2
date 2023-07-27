# Week 1 Lecture 2: Object Equality

## Terms
- **Memory Stack** - Static Memory Allocation. This is for primitive data types values, and complex data types heap addresses. It's `static` because the stored value does not "change;" it's replaced.

- **Memory Heap** - Dynamic Memory Allocation. This is for complex data types values. The address of a complex data type's value in the heap is what is ultimately stored in the stack.

- **Reference** - When a complex data type is stored in the heap, and its address is stored in the stack, this is known as a `reference`. If multiple variables are assigned the same complex data type as their value, the variables stack addresses act as a `reference`, or `pointer`, to the literal value in the heap.

- **Value** - When a primitive data type is stored in memory, its literal value is what is in the stack.

- **Shallow Copy** - An object whose properties have the same exact values as all of the properties of another object. However, any nested objects are not copies. They are the same reference object.
  > Example:

  ```js
  // billyCar and otherCar in this example are both shallow and deep copies
  let billyCar = { make: "Toyota", model: "Sienna", color: "Silver", safetyFeatures: true };
  let otherCar = { make: "Toyota", model: "Sienna", color: "Silver", safetyFeatures: true };
  ```
  > Example 2:

  ```js
  let safety = {
    seatbelts: true,
    backupCamera: true,
    birdsNestCameras: false
  }
  // billyCar and otherCar are shallow copies, but not deep copies
  let billyCar = { make: "Toyota", model: "Sienna", color: "Silver", safetyFeatures: safety };
  let otherCar = { make: "Toyota", model: "Sienna", color: "Silver", safetyFeatures: safety };
  ```

- **Deep Copy** - An object whose collective properties values as primitives match those of another object.
  > Example: 
  ```js
  // In this example, billyCar and otherCar ARE deep copies of each other, because make model and color share the same
  // primitive values between both, and the nested safetyFeatures objects share the same values for 
  // seatBelts, backupCamera, and birdsNestCameras
  let billyCar = { 
    make: "Toyota", 
    model: "Sienna",
    color: "Silver",
    safetyFeatures: { seatBelts: true, backupCamera: true, birdsNestCameras: true }
  }
  let otherCar = { 
    make: "Toyota", 
    model: "Sienna",
    color: "Silver",
    safetyFeatures: { seatBelts: true, backupCamera: true, birdsNestCameras: true }
  }
  ```

- **Recursion** - When a function calls itself within itself.

- **Spread Operator** - An operation that allows you to take all of the contents of an array or object, and "spread" them into a new array or object. This is useful for creating partial or full shallow copies (partial when used with destructuring, which we'll discuss another time).

## Extra Readings
- [Handling Memory Management in JavaScript](https://www.turing.com/kb/handling-memory-management-in-javascript)