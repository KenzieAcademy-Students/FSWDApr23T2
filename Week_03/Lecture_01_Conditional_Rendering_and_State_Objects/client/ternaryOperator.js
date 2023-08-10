/**
 * A ternary operator is effectively an if-else statement
 * in the form of an expression.
 *
 * The term ternary, with the latin root of tern, indicates
 * that it comprises of 3 parts:
 * - the condition
 * - the truthy evaluation
 * - the falsey evaluation
 */

// EXAMPLE: as an if else statement
const someBooleanValue = true;
// let renderedResult;
// if (someBooleanValue === true) {
//   renderedResult = <span className="green">&check;</span>;
// } else {
//   renderedResult = <span className="red">&#10539;</span>;
// }

// As a ternary operator
let renderedResult =
  someBooleanValue === true ? (
    <span className="green">&check;</span>
  ) : (
    <span className="red">&#10539;</span>
  );
