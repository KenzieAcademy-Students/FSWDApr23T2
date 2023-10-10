const TodoItem = ({ todo, handleComplete, handleDelete }) => {
  const handleChecked = (e) => {
    handleComplete(todo.id, e.target.checked);
  };

  const handleDeleteTodo = (e) => {
    handleDelete(todo.id);
  };

  return (
    <li className="TodoItem">
      <input
        type="checkbox"
        name="completed"
        checked={todo.completed}
        onChange={(e) => handleChecked(e)}
      />
      <p> {todo.title} </p>
      <button onClick={handleDeleteTodo}>X</button>
    </li>
  );
};

export default TodoItem;
