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

  test("Should show completed todos", () => {
    // arrange
    const newTodos: TodoType[] = [new Todo("get milk"), new Todo("get bread")];
    // act
    const list = new TodoList(newTodos);
    // assert
    expect(list.getCompleted()).toEqual([]);
  });

  test("Should show incomplete todos", () => {
    // arrange
    const newTodos: TodoType[] = [new Todo("get milk"), new Todo("get bread")];
    // act
    const list = new TodoList(newTodos);
    list.todos[0].toggleComplete();
    // assert
    expect(list.getIncomplete()).toEqual([
      { title: "get bread", isComplete: false },
    ]);
  });

  test("Should show incomplete todos first", () => {
    // arrange
    const milkTodo = new Todo("get milk");
    milkTodo.toggleComplete();

    const newTodos: TodoType[] = [
      milkTodo,
      new Todo("get bread"),
      new Todo("get cheese"),
    ];
    // act
    const list = new TodoList(newTodos);
    list.todos[0].toggleComplete();
    const newList = list.todos.map((todo: TodoType) => todo.title);
    // assert
    expect(newList).toEqual(["get bread", "get cheese", "get milk"]);
  });

  test("Should be able to add todo to list", () => {
    // arrange
    const newTodos: TodoType[] = [];
    // act
    const list = new TodoList(newTodos);
    list.addTodo("get milk");
    const newList = list.todos.map((todo: TodoType) => todo.title);
    // assert
    expect(newList).toEqual(["get milk"]);
  });

  test("Should add new todo to top of list", () => {
    // arrange
    const newTodos: TodoType[] = [
      new Todo("get bread"),
      new Todo("get cheese"),
    ];
    // act
    const list = new TodoList(newTodos);
    list.addTodo("get milk");
    const newList = list.todos.map((todo: TodoType) => todo.title);
    // assert
    expect(newList).toEqual(["get milk", "get bread", "get cheese"]);
  });
});
