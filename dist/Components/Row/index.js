"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var Row = function Row(props) {
  var data = props.data,
      columns = props.columns,
      index = props.index,
      _props$page = props.page,
      page = _props$page === void 0 ? 1 : _props$page;

  var re_order_Object = function re_order_Object() {
    var array_order = [];

    if (!Array.isArray(data) && _typeof(data) === "object") {
      Object.entries(data).forEach(function (entry) {
        var _entry = _slicedToArray(entry, 2),
            key = _entry[0],
            value = _entry[1];

        var order_find = Array.from(columns).findIndex(function (each) {
          return each.data === key;
        });

        if (order_find > -1) {
          array_order[order_find] = value;
        }

        return array_order;
      });
    } else if (Array.isArray(data)) {
      Array.from(data).forEach(function (entry) {
        array_order.push(entry);
      });
    }

    return array_order;
  };

  return /*#__PURE__*/_react.default.createElement("tr", {
    className: "row"
  }, Array.from(re_order_Object()).map(function (element, index) {
    return /*#__PURE__*/_react.default.createElement("td", {
      key: 'row_' + index
    }, element);
  }));
};

var _default = Row;
exports.default = _default;