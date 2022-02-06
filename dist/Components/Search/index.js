"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Search;

var _react = _interopRequireWildcard(require("react"));

var _pageContext = require("../../context/pageContext");

var _lengthPageContext = require("../../context/lengthPageContext");

require("./index.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Search(_ref) {
  var onSearch = _ref.onSearch;

  var _useContext = (0, _react.useContext)(_pageContext.pageContext),
      page = _useContext.page,
      setPage = _useContext.setPage;

  var _useContext2 = (0, _react.useContext)(_lengthPageContext.lengthPageContext),
      length = _useContext2.length,
      setLength = _useContext2.setLength;

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "search"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "search"
  }, "Search: "), /*#__PURE__*/_react.default.createElement("input", {
    id: "search",
    onChange: function onChange(e) {
      return onSearch(e.target.value);
    }
  }));
}