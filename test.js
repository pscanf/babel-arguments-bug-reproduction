require("babel-polyfill");

console.log("async-arrow");
const asyncArrowTest = require("./transpiled/async-arrow").test;
asyncArrowTest()(0, 1, 2);

console.log("async-normal");
const asyncNormalTest = require("./transpiled/async-normal").test;
asyncNormalTest()(0, 1, 2);

console.log("non-async-arrow");
const nonAsyncArrowTest = require("./transpiled/non-async-arrow").test;
nonAsyncArrowTest()(0, 1, 2);
