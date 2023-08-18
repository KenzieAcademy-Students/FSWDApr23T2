import useCustomHooks from "./useCustomHooks";

function CustomHooks() {
  const { count, handleIncrement, handleDecrement } = useCustomHooks();

  return (
    <div>
      <button onClick={handleDecrement}>Substract Now (-)</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>Add Now (+)</button>
    </div>
  );
}

export default CustomHooks;
