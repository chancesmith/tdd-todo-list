import React, { useState, useEffect } from "react";
import Todo from "./api/Todo";
import TodoList from "./api/TodoList";

// 👋 imagine this list is a prop, context or JSON api
const list = new TodoList([]);

function App() {
  const [todos, setTodos] = useState(list.todos);

  function handleNewTodo(txt) {
    list.addTodo(txt);
    setTodos(list.todos);
  }

  function handleClick(txt) {
    handleNewTodo(`add things ${list.todos.length}`);
  }

  return (
    <div>
      <button onClick={handleClick}>add todo</button>
      <ul>
        {todos.map((todo) => (
          <li>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
