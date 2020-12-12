import TodoList from "./TodoList";
import { TodoType } from "../DataTypes";
import Todo from "./Todo";

describe("TodoList", () => {
  test("Should take inital list of todos + empty list too", () => {
    // empty list
    const todoList1 = new TodoList([]);
    expect(todoList1.todos).toEqual([]);

    // list of todos
    const newTodos: TodoType[] = [new Todo("get milk"), new Todo("get bread")];
    // act
    const todoList2 = new TodoList(newTodos);
    // assert
    expect(todoList2.todos).toEqual(newTodos);
  });
});
