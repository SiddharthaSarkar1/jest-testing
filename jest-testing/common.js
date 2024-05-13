function commonBefore() {
  return "Running before test.";
}

function commonAfter() {
  return "Running After test.";
}

module.exports = { commonBefore, commonAfter };
