import { useState } from "react";
import { AddTodo, TodoList } from "./Components/index";
import todoList from "./todoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(todoList);

  const handleAdd = (title) => {
    // Create a new object with these properties:
    // id: todos[todos.length-1].id + 1
    // title: the value passed in this function
    // completed: false
  };

  return (
    <div className="App">
      <h1>Todo List:</h1>
      <AddTodo />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
