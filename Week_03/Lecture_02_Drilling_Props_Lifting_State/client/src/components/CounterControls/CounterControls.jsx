import "./CounterControls.css";

function CounterControls({ setCount }) {
  /**
   * Adds 1 to the count if and only if the count's
   * current value is less than 20
   * @param {MouseEvent<HTMLButtonElement>} e - The event
   */
  /**
   * The callback passed into any setState function is provided its related state
   * as an argument
   */
  const handleAdd = (e) =>
    setCount((count) => (count < 20 ? count + 1 : count));

  /**
   * Subtracts 1 from the count if and only if the count's
   * current value is greater than 0
   * @param {MouseEvent<HTMLButtonElement>} e - The event
   */
  const handleSubtract = (e) =>
    setCount((count) => (count > 0 ? count - 1 : count));

  return (
    <div className="row counter-controls-outline">
      <button onClick={handleSubtract}>Subtract (-)</button>
      <button onClick={handleAdd}>Add (+)</button>
    </div>
  );
}

export default CounterControls;
