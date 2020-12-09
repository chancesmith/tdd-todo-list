# TDD Todo workflow

Write the tests that will use your app. Write your logic first with TDD. Do the UI later.

Currently, there is a failing test in Todo.test.ts for you to start by writing production code. 

*Hint: We need a class in `Todo.ts` made and imported into `Todo.test.ts`.*

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

**TodoList**

- [ ] takes init of todo items
- [ ] get all todos
- [ ] get all complete todos
- [ ] get all inComplete todos
- [ ] in the todo list, inComplete todos are above complete todos
- [ ] add todo to list
- [ ] new todo item is added to top of the list

**App.ts**

- [ ] show a list of all todos
- [ ] mark todo done
- [ ] add todo item
