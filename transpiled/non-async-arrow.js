"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.test = test;
function test() {
    return function () {
        for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
            params[_key] = arguments[_key];
        }

        console.log(params);
    };
}