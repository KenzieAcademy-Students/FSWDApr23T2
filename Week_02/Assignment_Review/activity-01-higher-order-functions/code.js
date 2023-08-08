const main = document.querySelector("main");

const printKata = function (kataNumber, object) {
  const detailsElement = document.createElement("details");
  main.append(detailsElement);
  const summaryElement = document.createElement("summary");
  summaryElement.append("KATA " + kataNumber);
  detailsElement.append(summaryElement);
  const stringifiedObject = JSON.stringify(object);
  detailsElement.append(stringifiedObject);
};

/**
 * KATA 0: Example
 *
 * Filter the users array to show only users with an eyeColor property of "green"
 */
const greenEyedUsers = users.filter((user) => user.eyeColor === "green");

printKata(0, greenEyedUsers);

/**
 * KATA 1: Use the .filter() method
 *
 * Filter the users array to show only the users with an isActive property of true.
 */
const onlyActiveUsers = users.filter((user) => user.isActive);

printKata(1, onlyActiveUsers);

/**
 * KATA 2: Use the .map() method
 *
 * Map over the users array to show only the email addresses of the users.
 */
const userEmails = users.map((user) => user.email);

printKata(2, userEmails);

/**
 * KATA 3: Use the .some() method
 *
 * Check whether at least one user in the users array has a company property of "OVATION".
 */
const isAnyUserOvation = users.some((user) => user.company === "OVATION");

printKata(3, isAnyUserOvation);

/**
 * KATA 4: Use the .find() method
 *
 * Find the first user in the array over the age of 28.
 */
const firstUserOver28 = users.find((user) => user.age >= 28);

printKata(4, firstUserOver28);

/**
 * KATA 5: Use the .filter() and .find() methods
 *
 * Find the first user in the array over the age of 28 that is active.
 */
const firstActiveUserOver28 = users
  .filter((user) => user.age >= 28)
  .find((user) => user.isActive);

printKata(5, firstActiveUserOver28);

/**
 * KATA 6: Use the .filter() and .map() methods
 *
 * Show the balance of each user in the array from the "ZENCO" company.
 */
const zencoUserBalances = users
  .filter((user) => user.company === "ZENCO")
  .map((user) => user.balance);

printKata(6, zencoUserBalances);

/**
 * KATA 7: Use the .filter() method with .includes() and the .map() method
 *
 * Show the age of every user with the "fugiat" tag.
 */
const fugiatTaggedUsers = users
  .filter((user) => user.tags.includes("fugiat"))
  .map((user) => user.age);

printKata(7, fugiatTaggedUsers);

/**
 * KATA 8: Use the .reduce() method to calculate the total sum of every users balance
 */
const totalBalance = users.reduce((total, user) => {
  // total is the sum of balances so far as a number
  // convert the string of user.balance to a number. to do this, we'll need
  // to remove the $, and replace any commas (,) with an empty string.
  const userBalance = Number(user.balance.replace("$", "").split(",").join(""));
  return total + userBalance;
}, 0);

printKata(8, totalBalance);

/**
 * KATA 9: Display every user with brown eyes
 */
const h2 = document.createElement("h2");
h2.innerText = "Users with Brown Eyes";
main.append(h2);

const userList = document.createElement("ul");
users
  .filter((user) => user.eyeColor === "brown")
  .reduce((list, user) => {
    list.appendChild(renderUserListItem(user));
    return list;
  }, userList);

main.append(userList);

function renderUserListItem(user) {
  const listItem = document.createElement("li");

  const userName = document.createElement("p");
  userName.innerText = user.name;
  listItem.append(userName);

  const eyeColor = document.createElement("p");
  eyeColor.innerText = "Eye Color: " + user.eyeColor;
  listItem.append(eyeColor);

  const userImage = document.createElement("img");
  userImage.src = user.picture;
  listItem.append(userImage);

  return listItem;
}
