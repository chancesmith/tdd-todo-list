import React from "react";
import Todo from "./api/Todo";
import TodoList from "./api/TodoList";

function App() {
  const todos = [new Todo("get milk"), new Todo("get bread")];
  const list = new TodoList(todos);

  return (
    <ul>
      {list.todos.map((todo) => (
        <li>{todo.title}</li>
      ))}
    </ul>
  );
}

export default App;
