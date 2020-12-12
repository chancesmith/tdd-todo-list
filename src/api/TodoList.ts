import { TodoType } from "../DataTypes";
import Todo from "./Todo";

export default class TodoList {
  todos: TodoType[];

  constructor(state: TodoType[]) {
    this.todos = state.sort((a: TodoType, b: TodoType) => {
      return a.isComplete === b.isComplete ? 0 : a.isComplete ? 1 : -1;
    });
  }

  getCompleted() {
    return this.todos.filter((todo: TodoType) => todo.isComplete);
  }

  getIncomplete() {
    return this.todos.filter((todo: TodoType) => !todo.isComplete);
  }

  addTodo(title: string) {
    this.todos = [new Todo(title), ...this.todos]
  }
}
