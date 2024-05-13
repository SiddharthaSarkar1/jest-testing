const promiseTestFn = require("./promiseTest");

describe("Promise Test Suite", () => {
  test("Promise testing", () => {
    return promiseTestFn().then((data) => {
      expect(data).toBe("Promise Resolved");
    });
  });
});
