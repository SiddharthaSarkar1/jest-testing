const fetchData = require("./fetchData");

//Callback function test
test("testing callback function", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("Hello");
      done();
    } catch (error) {
      done(error);
    }
  }
  fetchData(callback);
});
