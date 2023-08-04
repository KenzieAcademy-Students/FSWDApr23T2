import { useState } from "react";
import "./Counter.css";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  function handleIncrement(event) {
    /* your code here */
  }

  function handleDecrement(event) {
    /* your code here */
  }

  /**
   * Ternary operator:
   * condition ? result if condition is true : result if condition is false
   */

  return (
    <div className="Counter">
      <button>decrement (-)</button>
      <span className={count > 20 ? "hello" : "goodbye"}>{count}</span>
      <button>increment (+)</button>
    </div>
  );
};

export default Counter;
