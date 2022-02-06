"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _svg = require("./assets/svg");

require("./assets/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Columns = function Columns(props) {
  var data = props.data,
      sort = props.sort,
      setSort = props.setSort;
  return /*#__PURE__*/_react.default.createElement("tr", {
    className: "columns"
  }, data.map(function (element, index) {
    return /*#__PURE__*/_react.default.createElement("th", {
      key: 'column_' + index
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "column"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "column__title"
    }, element.title), /*#__PURE__*/_react.default.createElement("div", {
      className: "column__order",
      onClick: function onClick(e) {
        return sort.key === element.data ? sort.direction === 1 ? setSort(_objectSpread(_objectSpread({}, sort), {}, {
          direction: -1
        })) : setSort(_objectSpread(_objectSpread({}, sort), {}, {
          key: null
        })) : setSort(_objectSpread(_objectSpread({}, sort), {}, {
          key: element.data,
          direction: 1
        }));
      }
    }, sort.key === element.data && sort.direction === 1 || sort.key !== element.data ? /*#__PURE__*/_react.default.createElement("div", {
      className: "column__order__item order_up"
    }, _svg.order_up) : '', sort.key === element.data && sort.direction === -1 || sort.key !== element.data ? /*#__PURE__*/_react.default.createElement("div", {
      className: "column__order__item order_down"
    }, _svg.order_down) : '')));
  }));
};

var _default = Columns;
exports.default = _default;