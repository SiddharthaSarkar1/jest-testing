const asyncawaitFn = require("./asyncawaitTest")

describe("Async Await Test Suite", () => {
  test("test async function", async () => {
    const data = await asyncawaitFn();
    expect(data).toBe("Resolving the promise");
  });
});
