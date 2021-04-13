import { useState } from "react";

export function Todos({list}) {
  const [todos, setTodos] = useState(list.todos);

  const [inputValue, setInputValue] = useState('');

  function handleNewTodo(txt) {
    list.addTodo(txt);
    setTodos(list.todos);
  }

  function handleAddTodoSubmit() {
    if (inputValue.length !== 0) {
      handleNewTodo(inputValue);
      setInputValue('');
    }
  }

  function handleInput(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <label>
        <span>Add Todo</span>
        <input type="text" value={inputValue} onChange={handleInput}/>
      </label>
      <button onClick={handleAddTodoSubmit}>add todo</button>
      {todos.length ? (
        <ul>
          {todos.map((todo) => (
            <li key={todo.title} label="todo">{todo.title}</li>
          ))}
        </ul>
      ) : <p>no todos</p>}
    </div>
  );
}
