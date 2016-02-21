# babel-arguments-bug-reproduction

Transpilation of the async arrow function sets a
[module-wide `_arguments`](./source/async-arrow.js#L6) variable which is then
used in the returned function, yielding unexpected results, as `test.js`
demonstrates (reproduce running `npm start`).
