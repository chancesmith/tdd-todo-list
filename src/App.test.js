import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Todos } from "./Todos";
import TodoList from "./api/TodoList";
import Todo from "./api/Todo"

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

test('should have checkbox on todo', async () => {
  const {getByLabelText} = render(<Todos list={new TodoList([new Todo("get milk")])} />);

  await waitFor(() => screen.getByLabelText("get milk - checkbox"));
  const todoCheckbox = getByLabelText("get milk - checkbox")

  expect(todoCheckbox).toBeInTheDocument()
  // expect(checkbox).not.toBeChecked()
});

test('should not be checked on new todo', async () => {
  const {getByLabelText} = render(<Todos list={new TodoList([new Todo("get milk")])} />);

  await waitFor(() => screen.getByLabelText("get milk - checkbox"));
  const todoCheckbox = getByLabelText("get milk - checkbox")

   expect(todoCheckbox).not.toBeChecked()
})

test('should mark todo done when checkbox clicked', async () => {
    const {getByLabelText} = render(<Todos list={new TodoList([new Todo("get milk")])} />);

  await waitFor(() => screen.getByLabelText("get milk - checkbox"));
  const todoCheckbox = getByLabelText("get milk - checkbox")

  // mark todo done
  fireEvent.click(todoCheckbox);

  await waitFor(() => screen.getByLabelText("get milk - checkbox(done)"));
  const doneTodoCheckbox = getByLabelText("get milk - checkbox(done)");

  expect(doneTodoCheckbox).toBeInTheDocument();
  expect(doneTodoCheckbox).toBeChecked();
})