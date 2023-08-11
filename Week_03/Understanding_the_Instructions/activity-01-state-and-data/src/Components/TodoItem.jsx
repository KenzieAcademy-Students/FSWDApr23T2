const TodoItem = ({ todo }) => {
  console.log("IS " + todo.title + " COMPLETED: ", todo.completed);
  const handleChecked = (e) => {
    // console.log(e.target.checked);
  };

  return (
    <li className="TodoItem">
      <input
        type="checkbox"
        name="completed"
        value={todo.completed}
        onChange={(e) => handleChecked(e)}
      />
      <p> {todo.title} </p>
      <button>X</button>
    </li>
  );
};

export default TodoItem;
