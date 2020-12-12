import Todo from "./Todo";

describe("Todo", () => {
  test("Should be initialized with a title and TodoState", () => {
    // arrange
    // act
    const todo = new Todo("get milk");

    // assert
    expect(todo.title).toEqual("get milk");
    expect(todo.isComplete).toEqual(false);
  });

  test("Should throw error if not initialized with a valid title", () => {
    expect(() => {
      // @ts-ignore
      new Todo(undefined);
    }).toThrow();
  });

  test("Should be able to mark complete", () => {
    // arrange
    const todo = new Todo("get milk");

    // act
    todo.toggleComplete();

    // assert
    expect(todo.isComplete).toEqual(true);
  });

  test("Should be able to mark uncomplete", () => {
    // arrange
    const todo = new Todo("get milk");

    // act - toggle twice
    todo.toggleComplete();
    todo.toggleComplete();

    // assert
    expect(todo.isComplete).toEqual(false);
  });
});
