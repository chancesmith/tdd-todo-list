import TodoState from "./TodoState";

describe("TodoState", () => {
  it("Should have a UNDONE state", () => {
    expect(TodoState.UNDONE).toEqual(0);
  });
  it("Should have a DONE state", () => {
    expect(TodoState.DONE).toEqual(1);
  });
});
