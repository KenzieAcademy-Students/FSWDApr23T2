/**
 * .reduce() - higher order function that is responsible for...
 * almost anything? In general it is used to "reduce" an array
 * of elements down into one "thing"
 *
 * Unlike the other higher order functions we've spoken about,
 * .reduce() differs in both the structure of its callback parameter,
 * and the fact that it is common to provide a 2nd argument
 * to .reduce() itself.
 */

const learners = [
  { name: "Billy Smith", grade: 83.54 },
  { name: "Chloe Jackson", grade: 92.78 },
  { name: "Daniel Danielson", grade: 76.49 },
  { name: "Jon Hale", grade: 62.87 },
];

const avgGrade = learners.reduce((accumulator, currentElement, i, arr) => {
  /**
   * The value of accumulator will be the result
   * of this callback from the previous element.
   */
  let sum = accumulator + currentElement.grade;

  if (i === arr.length - 1) {
    sum /= arr.length;
  }

  return sum;
}, 0);

const tableRows = learners.reduce(
  (tableRows, student) =>
    tableRows +
    `
<tr>
  <td>${student.name}</td>
  <td>${student.grade}</td>
  <td>${student.grade > 70 ? "YES" : "NO"}</td>
</tr>
`,
  ""
);
const gradeTable = document.getElementById("grade-table");
gradeTable.innerHTML = tableRows;
