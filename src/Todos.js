import { useState, useEffect } from "react";

export function Todos({ list }) {
  const [todos, setTodos] = useState(list.todos);

  const [inputValue, setInputValue] = useState("");

  function handleNewTodo(txt) {
    list.addTodo(txt);
    setTodos(list.todos);
  }

  function handleAddTodoSubmit() {
    if (inputValue.length !== 0) {
      handleNewTodo(inputValue);
      setInputValue("");
    }
  }

  function handleInput(event) {
    setInputValue(event.target.value);
  }

  function handleTodoComplete(event, todoIndex) {
    list.todos[todoIndex].isComplete = event.target.checked;
    setTodos([...list.todos]);
  }

  return (
    <div>
      <label>
        <span>Add Todo</span>
        <input type="text" value={inputValue} onChange={handleInput} />
      </label>
      <button onClick={handleAddTodoSubmit}>add todo</button>
      {todos.length ? (
        <ul>
          {todos.map((todo, index) => (
            <li key={todo.title} label="todo">
              <input type="checkbox" defaultChecked={todo.isComplete} onClick={(event)=>handleTodoComplete(event,index)} aria-label={`${todo.title} - checkbox${todo.isComplete ? '(done)' : ''}`} />{" "}
              {todo.title} {todo.isComplete ? '(done)' : ''}
            </li>
          ))}
        </ul>
      ) : (
        <p>no todos</p>
      )}
    </div>
  );
}
