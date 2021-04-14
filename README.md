# TDD ToDo workflow

Write the tests that will use your app. Write your logic first with TDD. Do the UI later.

Currently, there is a failing test in Todo.test.ts for you to start by writing production code.

*Hint: We need a class in `Todo.ts` made and imported into `Todo.test.ts`.*

## Next up

Clone/Fork and finish the logic writing your tests first.

**TodoState**

- [x] can be done
- [x] can be incomplete

**Todo**

- [x] takes init state (string)
- [x] throw error if not a valid todo string
- [x] init state is inComplete
- [x] can mark complete
- [x] can mark uncomplete

**TodoList**

- [x] takes init empty todo list
- [x] takes init of todo items
- [x] get all todos
- [x] get all complete todos
- [x] get all inComplete todos
- [x] add todo to list
- [x] new todo item is added to top of the list
- [x] in the todo list, inComplete todos are above complete todos

**App.ts**

- [x] show a list of todos
- [x] add item to list
- [x] mark todo complete
- [x] show completed tasks
