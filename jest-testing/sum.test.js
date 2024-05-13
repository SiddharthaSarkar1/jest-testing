const {
  sum,
  objTestFn,
  stringTestFn,
  stringTestFn2,
  myVariable,
} = require("./sum");
const { commonBefore, commonAfter } = require("./common");

describe("First Test Suite", () => {
  test("first test case", () => {
    expect(sum(10, 30)).toBe(40);
  });

  test("second test case", () => {
    expect(sum(10, 30)).not.toBe(400);
  });

  test("Object test case", () => {
    expect(objTestFn()).toEqual({ name: "Siddhartha" });
  });

  test("string test case", () => {
    expect(stringTestFn()).toMatch("Hello World");
  });

  test("string test case two", () => {
    expect(stringTestFn2("javascript")).toMatch("JAVASCRIPT");
  });

  test("variable test case", () => {
    expect(myVariable).toMatch("This is my variable");
  });

  test("partial match test case", () => {
    expect(myVariable).toMatch(/is my/);
  });
});

describe("Test suite for Before and After Each", () => {
  beforeEach(() => {
    console.log(commonBefore());
  });

  afterEach(() => {
    console.log(commonAfter());
  });

  test("sum test case", () => {
    expect(sum(10, 15)).toBe(25);
  });

  test("sum test case 2", () => {
    expect(sum(15, 25)).toBe(40);
  });

  test("sum test case 3", () => {
    expect(sum(15, 15)).toBe(30);
  });
});
