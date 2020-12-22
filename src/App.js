import React, {useState} from "react";
import Todo from "./api/Todo";
import TodoList from "./api/TodoList";

function App() {
  const todos = [new Todo("get milk"), new Todo("get bread")];
  const [list] = useState(new TodoList(todos));
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    list.addTodo(text)
    setText('');
    console.log(list.todos);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
             id="task"
             placeholder="add a todo"
             value={text}
             onChange={handleChange}
        />
      </form>
      <ul>
        {list.todos.map((todo) => (
          <li>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
