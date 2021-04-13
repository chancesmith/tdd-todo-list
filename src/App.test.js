import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Todos } from "./Todos";
import TodoList from "./api/TodoList";

test("should get empty list of todos", async () => {
  const {getByText} = render(<Todos list={new TodoList([])} />);

  await waitFor(() => screen.getByText("no todos"));
  expect(getByText("no todos")).toBeInTheDocument()
});

test("should get list of todos", async () => {
  const {getByText} = render(<Todos list={new TodoList([{title: 'first todo',
  isComplete: false}])} />);

  await waitFor(() => screen.getByText("first todo"));
  expect(getByText("first todo")).toBeInTheDocument()
});

test("should have add new todo input", async () => {
  render(<Todos list={new TodoList([])} />);

  const input = screen.getByLabelText("Add Todo");
  expect(input).toBeInTheDocument();
  expect(input.value).toBe('');
})

test('should not add todo if input is empty', () => {
  const {queryAllByLabelText} = render(<Todos list={new TodoList([])} />);

  // try to add blank item to todo list
  const addTodoButton = screen.getByText('add todo')
  fireEvent.click(addTodoButton)

  expect(queryAllByLabelText("todo").length).toBe(0);
});

test("should add item to list", async () => {
  const todoText = 'get milk';
  const {getByText} = render(<Todos list={new TodoList([])} />);

  // type in next todo
  const input = screen.getByLabelText("Add Todo");
  fireEvent.change(input, { target: { value: todoText } })

  // add item to todo list
  const addTodoButton = screen.getByText('add todo')
  fireEvent.click(addTodoButton)

  await waitFor(() => screen.getByText(todoText));
  expect(getByText(todoText)).toBeInTheDocument();
});

test('should empty input field on submit', async () => {
  const todoText = 'get milk';
  render(<Todos list={new TodoList([])} />);

  // type in next todo
  const input = screen.getByLabelText("Add Todo");
  fireEvent.change(input, { target: { value: todoText } })

   // add item to todo list
   const addTodoButton = screen.getByText('add todo')
   fireEvent.click(addTodoButton)

   await waitFor(() => screen.getByText(todoText));
   expect(input.value).toBe('');
});
