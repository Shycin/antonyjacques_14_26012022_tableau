"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DropDown;

var _react = _interopRequireWildcard(require("react"));

var _pageContext = require("../../context/pageContext");

var _lengthPageContext = require("../../context/lengthPageContext");

require("./index.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function DropDown(_ref) {
  var lengthMenu = _ref.lengthMenu;

  var _useContext = (0, _react.useContext)(_pageContext.pageContext),
      page = _useContext.page,
      setPage = _useContext.setPage;

  var _useContext2 = (0, _react.useContext)(_lengthPageContext.lengthPageContext),
      length = _useContext2.length,
      setLength = _useContext2.setLength;

  var onChange = function onChange(e) {
    setLength(e.target.value);
    setPage(1);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "DropDown"
  }, "Show \xA0", /*#__PURE__*/_react.default.createElement("select", {
    onChange: onChange
  }, Array.from(lengthMenu).map(function (element, index) {
    if (element === length) {
      return /*#__PURE__*/_react.default.createElement("option", {
        key: index,
        defaultValue: true
      }, element);
    } else {
      return /*#__PURE__*/_react.default.createElement("option", {
        key: index
      }, element);
    }
  })), "\xA0 entries");
}