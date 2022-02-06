"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _DataTable = _interopRequireDefault(require("./DataTable"));

var _pageContext = require("./context/pageContext");

var _lengthPageContext = require("./context/lengthPageContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(props) {
  return /*#__PURE__*/_react.default.createElement(_pageContext.ContextPageContextProvider, null, /*#__PURE__*/_react.default.createElement(_lengthPageContext.ContextLengthPageContextContextProvider, null, /*#__PURE__*/_react.default.createElement(_DataTable.default, props)));
};

var _default = App;
exports.default = _default;