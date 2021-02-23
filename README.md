# TDD Todo workflow kata (~1 hour)

Write the tests that will use your app. Write your logic first with TDD. Do the UI later.

Currently, there is a failing test in Todo.test.ts for you to start by writing production code.

*Hint: We need a class in `./src/api/Todo.ts` made and imported into `./src/api/Todo.test.ts`.*

## Next up

Clone/Fork and finish the logic writing your tests first.

**TodoState**

- [x] can be done
- [x] can be incomplete

**Todo**

- [ ] takes init state (string)
- [ ] throw error if not a valid todo string
- [ ] init state is inComplete
- [ ] can mark complete
- [ ] can mark uncomplete

**TodoList**

- [ ] takes init empty todo list
- [ ] takes init of todo items (array of Todo instances)
- [ ] get all todos
- [ ] get all complete todos
- [ ] get all inComplete todos
- [ ] in the todo list, inComplete todos are above complete todos
- [ ] add todo to list
- [ ] new todo item is added to top of the list

**App.ts**

- [ ] show an empty list of todos
- [ ] show a list of todos
- [ ] add item to list
