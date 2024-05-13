function asyncawaitFn() {
  return new Promise((resolve, reject) => {
    resolve("Resolving the promise");
  });
}

module.exports = asyncawaitFn;
