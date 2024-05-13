function promiseTestFn() {
  return new Promise((resolve, reject) => {
    resolve("Promise Resolved");
  });
}

module.exports = promiseTestFn;
