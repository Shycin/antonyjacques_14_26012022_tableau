"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Navigate;

var _react = _interopRequireWildcard(require("react"));

var _pageContext = require("../../context/pageContext");

var _lengthPageContext = require("../../context/lengthPageContext");

var _Pagination = _interopRequireDefault(require("../Pagination"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Navigate(_ref) {
  var maxPage = _ref.maxPage;

  var _useContext = (0, _react.useContext)(_pageContext.pageContext),
      page = _useContext.page,
      setPage = _useContext.setPage;

  var previousPage = function previousPage() {
    setPage(page - 1);
  };

  var nextPage = function nextPage() {
    setPage(page + 1);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "select"
  }, page > 1 ? /*#__PURE__*/_react.default.createElement("button", {
    id: "Entries_previous",
    className: "navigate",
    onClick: function onClick() {
      return previousPage();
    }
  }, "Previous") : '', /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    maxPage: maxPage
  }), page < maxPage ? /*#__PURE__*/_react.default.createElement("button", {
    id: "Entries_next",
    className: "navigate",
    onClick: function onClick() {
      return nextPage();
    }
  }, "Next") : '');
}