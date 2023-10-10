import { useState } from "react";
import { AddTodo, TodoList } from "./Components/index";
import todoList from "./todoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(todoList);

  const handleAddTodo = (title) => {
    const newTodo = {
      id:
        todos.reduce((maxId, todo) => {
          if (todo.id > maxId) {
            maxId = todo.id;
          }

          return maxId;
        }, 0) + 1,
      title: title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const handleCompleteTodo = (id, completed) =>
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = completed;
        }

        return todo;
      })
    );

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo List:</h1>
      <AddTodo handleAdd={handleAddTodo} />
      <TodoList
        todos={todos}
        handleComplete={handleCompleteTodo}
        handleDelete={handleDeleteTodo}
      />
    </div>
  );
}

export default App;
