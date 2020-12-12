import { TodoType } from "../DataTypes";

export default class TodoList {
  todos: TodoType[];

  constructor(state: TodoType[]) {
    this.todos = state;
  }
}
