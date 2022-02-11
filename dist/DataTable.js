"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Row = _interopRequireDefault(require("./Components/Row"));

var _Columns = _interopRequireDefault(require("./Components/Columns"));

var _Navigate = _interopRequireDefault(require("./Components/Navigate"));

var _DropDown = _interopRequireDefault(require("./Components/DropDown"));

var _Search = _interopRequireDefault(require("./Components/Search"));

var _pageContext = require("./context/pageContext");

var _lengthPageContext = require("./context/lengthPageContext");

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Create a Table of data
 * @module Table
 * @component
 * @param {object} props
 * @prop {array} props.columns Array of obelect with columns's information like : { index:'column-index', label:'the name of column'}
 * @prop {array} props.data Array of data to show by line
 * @prop {array} props.lengthMenu Number of element per page. Each key have to correspond with an index to an element of cols's props.
 **/
var DataTable = function DataTable(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      _ref$columns = _ref.columns,
      columns = _ref$columns === void 0 ? [] : _ref$columns,
      _ref$lengthMenu = _ref.lengthMenu,
      lengthMenu = _ref$lengthMenu === void 0 ? [10, 25, 50, 100] : _ref$lengthMenu;
  var data_array = Array.from(data);
  var first_length = lengthMenu[0];
  var first_page = 1;

  var _useContext = (0, _react.useContext)(_lengthPageContext.lengthPageContext),
      length = _useContext.length,
      setLength = _useContext.setLength;

  var _useContext2 = (0, _react.useContext)(_pageContext.pageContext),
      page = _useContext2.page,
      setPage = _useContext2.setPage;

  var _useState = (0, _react.useState)(data_array.slice(first_length * (first_page - 1), first_length * first_page)),
      _useState2 = _slicedToArray(_useState, 2),
      itemDisplay = _useState2[0],
      setItemDisplay = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      search = _useState4[0],
      setSearch = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      searchArray = _useState6[0],
      setSearchArray = _useState6[1];

  var _useState7 = (0, _react.useState)({
    key: null,
    direction: 1
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      sort = _useState8[0],
      setSort = _useState8[1];

  var isDate = function isDate(value) {
    return !isNaN(Date.parse(value));
  };

  var onSort = function onSort() {
    var new_array = data_array;

    if (sort.key) {
      var key = sort.key;
      var direction = sort.direction;

      if (isDate(data_array[0][key])) {
        new_array = data_array.sort(function (a, b) {
          return direction * ((new Date(a[key]) > new Date(b[key])) - (new Date(b[key]) > new Date(a[key])));
        });
      } else {
        new_array = data_array.sort(function (a, b) {
          return direction * ((a[key] > b[key]) - (b[key] > a[key]));
        });
      }
    }

    return new_array;
  };

  (0, _react.useEffect)(function () {
    setLength(lengthMenu[0]);
    setPage(1);
  }, []);
  (0, _react.useEffect)(function () {
    if (search) {
      var new_array = onSort(sort).filter(function (item) {
        return JSON.stringify(item).toLowerCase().includes(search.toLowerCase());
      });
      setSearchArray(new_array);
      setItemDisplay(new_array.slice(length * (page - 1), length * page));
    } else {
      var _new_array = onSort(sort);

      setSearchArray(data_array);
      setItemDisplay(_new_array.slice(length * (page - 1), length * page));
    }
  }, [length, page, search, sort]);

  var onSearch = function onSearch(value) {
    if (value.length >= 3) {
      setSearch(value);
    } else {
      setSearch(null);
    }

    setPage(1);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    id: "DataTable"
  }, /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", {
    colSpan: columns.length
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex--between mt-1"
  }, /*#__PURE__*/_react.default.createElement(_DropDown.default, {
    lengthMenu: lengthMenu
  }), /*#__PURE__*/_react.default.createElement(_Search.default, {
    onSearch: onSearch
  })))), /*#__PURE__*/_react.default.createElement(_Columns.default, {
    data: columns,
    sort: sort,
    setSort: setSort
  }), itemDisplay.map(function (element, index) {
    return /*#__PURE__*/_react.default.createElement(_Row.default, {
      key: 'line_' + index,
      index: index,
      columns: columns,
      data: element,
      lengthMenu: lengthMenu
    });
  }), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", {
    colSpan: columns.length
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex--between mt-1"
  }, /*#__PURE__*/_react.default.createElement("div", null, "Showing ", length * (page - 1) + 1, " to ", length * page < searchArray.length ? length * page : searchArray.length, " of ", searchArray.length, " entries"), /*#__PURE__*/_react.default.createElement(_Navigate.default, {
    maxPage: Math.ceil(searchArray.length / length)
  })))))));
};

var _default = DataTable;
exports.default = _default;
DataTable.propTypes = {
  columns: _propTypes.default.arrayOf(_propTypes.default.shape({
    title: _propTypes.default.string,
    data: _propTypes.default.string
  })).isRequired,
  data: _propTypes.default.array.isRequired,
  lengthMenu: _propTypes.default.array
};