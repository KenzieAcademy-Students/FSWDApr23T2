import { useState, useEffect } from "react";

function useCustomHooks() {
  const [count, setCount] = useState(10);

  const handleIncrement = (e) =>
    setCount((currCount) => (currCount < 20 ? currCount + 1 : currCount));

  const handleDecrement = (e) =>
    setCount((currCount) => (currCount > 0 ? currCount - 1 : currCount));

  useEffect(() => {
    alert("Welcome to the Counting Game!");
  }, []);

  useEffect(() => {
    if (count === 0 || count === 20) {
      alert("Woah there, too far!");
    }
  }, [count]);

  return {
    count,
    handleIncrement,
    handleDecrement,
  };
}

export default useCustomHooks;
