/**
 * To remove an element from an array in state, we need to follow
 * these steps:
 * 1. Make a (shallow) copy of the array
 * 2. Delete the item from the copy of the array
 * 3. Pass the newly copied/modified array into the setState function
 */
// Delete the user with the id of 2
const users = [
  { id: 1, name: "Yes" },
  { id: 2, name: "No" },
  { id: 3, name: "Maybe" },
];
// 1 and 2: Use .filter() function
const updatedUsers = users.filter((user) => user.id !== 2);
// 3. Pass updatedUsers into setState

// One liner:
setUsers(users.filter((user) => user.id !== id));
