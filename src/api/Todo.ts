import TodoState from "./TodoState";

export default class Todo {
  title: string;
  isComplete: boolean;

  constructor(state: string) {
    if  (!state) throw new Error("Not a valid todo.");
    this.title = state;
    this.isComplete = !!TodoState.UNDONE;
  }

  toggleComplete () {
    this.isComplete = !this.isComplete;
  }
}
