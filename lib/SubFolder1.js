"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _SubFolder = _interopRequireDefault(require("./SubFolder2"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function SubFolder1(_ref) {
  var data = _ref.data,
    iconcolor = _ref.iconcolor;
  return /*#__PURE__*/_react["default"].createElement("div", null, data.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_SubFolder["default"], _extends({
      key: index
    }, item, {
      iconcolor: iconcolor
    }));
  }));
}
var _default = exports["default"] = SubFolder1;