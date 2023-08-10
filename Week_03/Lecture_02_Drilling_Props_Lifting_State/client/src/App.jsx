import { useState } from "react";
import "./App.css";
import { Counter, UserInfo } from "./components";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="app-outline">
      <p>Count in App: {count}</p>
      <Counter count={count} setCount={setCount} />
    </div>
  );
}

/**
 * This version of App was in reference to a question regarding
 * initial state as an array of objects, and passing each object
 * to a child component as props
 */

// const initialState = [
//   {
//     id: 2764,
//     firstName: "Karen",
//     lastName: "Schick",
//     coursesTaken: 2,
//   },
//   {
//     id: 3622,
//     firstName: "Miguel",
//     lastName: "Paque",
//     coursesTaken: 1,
//   },
//   {
//     id: 1849,
//     firstName: "Mireille",
//     lastName: "Mua",
//     coursesTaken: 3,
//   },
// ];
// function App() {
//   const [users, setUsers] = useState(initialState);

//   return (
//     <div className="container">
//       {users.map(({ id, firstName, lastName, coursesTaken }) => (
//         <UserInfo
//           key={id}
//           firstName={firstName}
//           lastName={lastName}
//           coursesTaken={coursesTaken}
//         />
//       ))}
//     </div>
//   );
// }

export default App;
