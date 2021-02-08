import TodoList from "./api/TodoList";
import {Todos} from './Todos'

const list = new TodoList([]);

// 👋 imagine this list prop to be context or JSON api. It's up to you how you use the class.
export default function App() {
  return <Todos list={list}/>
}
