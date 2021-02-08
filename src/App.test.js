import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
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
