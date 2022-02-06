"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.order_up = exports.order_down = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var order_up = /*#__PURE__*/_react.default.createElement("svg", {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "sort-up",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 320 512"
}, /*#__PURE__*/_react.default.createElement("path", {
  fill: "currentColor",
  d: "M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"
}));

exports.order_up = order_up;

var order_down = /*#__PURE__*/_react.default.createElement("svg", {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "sort-down",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 320 512"
}, /*#__PURE__*/_react.default.createElement("path", {
  fill: "currentColor",
  d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"
}));

exports.order_down = order_down;