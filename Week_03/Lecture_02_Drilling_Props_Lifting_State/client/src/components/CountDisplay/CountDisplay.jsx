import React from "react";
import "./CountDisplay.css";

function CountDisplay({ count }) {
  return <p className="count-display-outline">Count: {count}</p>;
}

export default CountDisplay;
