import { useState } from "react";

const ListItem = (props) => {
  const [count, setCount] = useState( 0);

  const handleIncrement = () => {
    console.log(count)
  };

  const handleDecrement = () => {
    console.log(count);
  };

  return (
    <li className="list_item">
      <p>Item</p>
      <div className="list_buttons">
        <button onClick={handleDecrement}> - </button>
        <p>{count}</p>
        <button onClick={handleIncrement}> + </button>
      </div>
    </li>
  );
};

export default ListItem;
