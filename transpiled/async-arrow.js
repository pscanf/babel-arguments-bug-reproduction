"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _arguments = arguments;
exports.test = test;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function test() {
    var _this2 = this;

    return function () {
        var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
            for (var _len = _arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
                params[_key] = _arguments[_key];
            }

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            console.log(params);

                        case 1:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })),
            _this = _this2;

        return function (_x) {
            return ref.apply(_this, arguments);
        };
    }();
}