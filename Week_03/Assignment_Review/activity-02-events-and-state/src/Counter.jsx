import { useState } from "react";
import "./Counter.css";

const Counter = ({ startCount }) => {
  const [count, setCount] = useState(startCount || 0);
  const [isModified, setIsModified] = useState(false);

  function handleIncrement(event) {
    if (count < 20) {
      setCount(count + 1);
      if (!isModified) setIsModified(true);
    }
  }

  function handleDecrement(event) {
    if (count > 0) {
      setCount(count - 1);
      if (!isModified) setIsModified(true);
    }
  }

  const resetCounter = () => {
    setCount(startCount || 0);
    setIsModified(false);
  };

  return (
    <>
      <div className="Counter">
        <button onClick={handleDecrement}>decrement (-)</button>
        <span className={count < 10 ? "text-black" : "text-red"}>{count}</span>
        <button onClick={handleIncrement}>increment (+)</button>
      </div>
      {isModified && <button onClick={resetCounter}>Reset</button>}
    </>
  );
};

export default Counter;
