import { TodoItem } from "./index";

const TodoList = ({ todos, handleComplete, handleDelete }) => {
  return (
    <ul className="TodoList">
      {todos &&
        todos.map((todo, index) => (
          <TodoItem
            todo={todo}
            key={index}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
          />
        ))}
    </ul>
  );
};

export default TodoList;
