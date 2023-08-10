import React, { useState } from "react";
import CountDisplay from "../CountDisplay/CountDisplay";
import "./Counter.css";
import CounterControls from "../CounterControls/CounterControls";

function Counter({ count, setCount }) {
  return (
    <div className="counter-outline">
      <p>Count in Counter: {count}</p>
      <CountDisplay count={count} />
      <CounterControls setCount={setCount} />
    </div>
  );
}

export default Counter;
