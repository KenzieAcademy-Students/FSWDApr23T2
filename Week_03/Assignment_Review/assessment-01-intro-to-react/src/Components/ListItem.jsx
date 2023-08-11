import { useState } from "react";

const ListItem = ({ name, amount }) => {
  const [count, setCount] = useState(
    typeof amount === "number" && amount > 0 ? Math.floor(amount) : 0
  );

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <li className="list_item">
      <p>{name}</p>
      <div className="list_buttons">
        <button onClick={handleDecrement}> - </button>
        <p>{count}</p>
        <button onClick={handleIncrement}> + </button>
      </div>
    </li>
  );
};

export default ListItem;
