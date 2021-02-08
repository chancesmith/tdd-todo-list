import { useState } from "react";

export function Todos({list}) {
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
      {todos.length ? (
        <ul>
          {todos.map((todo) => (
            <li key={todo.title}>{todo.title}</li>
          ))}
        </ul>
      ) : <p>no todos</p>}
    </div>
  );
}
