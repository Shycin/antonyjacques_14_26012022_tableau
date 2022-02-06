"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Pagination;

var _react = _interopRequireWildcard(require("react"));

var _pageContext = require("../../context/pageContext");

var _lengthPageContext = require("../../context/lengthPageContext");

require("./index.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Pagination(_ref) {
  var _ref$maxPage = _ref.maxPage,
      maxPage = _ref$maxPage === void 0 ? 0 : _ref$maxPage;

  var _useContext = (0, _react.useContext)(_pageContext.pageContext),
      page = _useContext.page,
      setPage = _useContext.setPage;

  var _useContext2 = (0, _react.useContext)(_lengthPageContext.lengthPageContext),
      length = _useContext2.length;

  var maxBox = 7;
  var boxNextMain = 1;
  var ellipis = '...';
  var showBox = []; // Si le max page est inférieur au nombre max qu'on veux on affiche le plus possible soit le max en props

  if (maxPage <= maxBox) {
    for (var i = 1; i <= maxPage; i++) {
      showBox.push(i);
    }
  } else {
    //Début d'éllipsis quand on est à 3 de différence soit avec le min soit le max
    if (page - boxNextMain > 3 && page + boxNextMain < maxPage - 2) {
      showBox.push(1);
      if (1 === page - boxNextMain - 1) showBox.push(page - boxNextMain);else showBox.push(ellipis);

      for (var _i = 0 - boxNextMain; _i <= boxNextMain; _i++) {
        showBox.push(page + _i);
      }

      if (maxPage === page + boxNextMain + 1) showBox.push(page + boxNextMain);else showBox.push(ellipis);
      showBox.push(maxPage);
    } else {
      if (page < 4) {
        for (var _i2 = 1 - boxNextMain; _i2 < 5; _i2++) {
          showBox.push(_i2 + 1);
        }

        showBox.push(ellipis);
        showBox.push(maxPage);
      } else if (page > maxPage - 4) {
        showBox.push(1);
        showBox.push(ellipis);

        for (var _i3 = maxPage - 5; _i3 < maxPage; _i3++) {
          showBox.push(_i3 + 1);
        }
      } else if (page - boxNextMain <= 3) {
        for (var _i4 = 1 - boxNextMain; _i4 < page + boxNextMain; _i4++) {
          showBox.push(_i4 + 1);
        }

        showBox.push(ellipis);
        showBox.push(maxPage);
      } else {
        showBox.push(1);
        showBox.push(ellipis);

        for (var _i5 = page - boxNextMain; _i5 < maxPage; _i5++) {
          showBox.push(_i5 + 1);
        }
      }
    } // for()

  }

  var changePage = function changePage(newpage) {
    if (page !== newpage) setPage(newpage);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "pagination"
  }, // maxPage > 0 
  // ?   [...Array(maxPage)].map((e, i) => 
  //         <button key={i} className={`pagination__page ${page === (i+1) ? 'pagination__page--current' : '' }`} onClick={(e) => changePage(i+1)}>{i+1}</button>
  //     )
  // : ''
  maxPage > 0 ? showBox.map(function (item, i) {
    if (item === ellipis) {
      return /*#__PURE__*/_react.default.createElement("button", {
        key: i,
        className: "pagination__page"
      }, item);
    } else {
      return /*#__PURE__*/_react.default.createElement("button", {
        key: i,
        className: "pagination__page ".concat(page === item ? 'pagination__page--current' : ''),
        onClick: function onClick(e) {
          return changePage(item);
        }
      }, item);
    }
  }) : '');
}