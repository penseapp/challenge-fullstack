(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/hooks/useCart.tsx":
/*!*******************************!*\
  !*** ./src/hooks/useCart.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartContext": function() { return /* binding */ CartContext; },
/* harmony export */   "default": function() { return /* binding */ CartProvider; },
/* harmony export */   "CartProvider": function() { return /* binding */ CartProvider; },
/* harmony export */   "useCart": function() { return /* binding */ useCart; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\sacul\\Documents\\dev\\penseApp\\frontend\\challenge-flutter-fullstack\\src\\hooks\\useCart.tsx";

/* eslint-disable no-alert */

/* eslint-disable no-restricted-globals */

const CartContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function CartProvider({
  children
}) {
  const {
    0: products,
    1: setProducts
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const data = localStorage.getItem('@penseapp:cart');

    if (data) {
      setProducts(JSON.parse(data));
    }
  }, []);
  const addToCart = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(product => {
    const productIndex = products.findIndex(item => item.id === product.id);

    if (product.statusFlag === 'Ativo') {
      if (productIndex >= 0) {
        const productsList = products;
        productsList[productIndex].quantity += 1;
        setProducts([...productsList]);
        localStorage.setItem('@penseapp:cart', JSON.stringify([...productsList]));
      } else {
        const newProduct = {
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          promoPrice: product.promoPrice,
          statusFlag: product.statusFlag,
          imageUrl: product.imageUrl,
          category: product.category,
          quantity: 1
        };
        setProducts([...products, newProduct]);
        localStorage.setItem('@penseapp:cart', JSON.stringify([...products, newProduct]));
      }
    } else {
      throw new Error('Produto indisponível no estoque');
    }
  }, [products]);
  const increment = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(product => {
    const productsList = products;
    const index = products.findIndex(item => item.id === product.id);
    productsList[index].quantity += 1;
    setProducts([...productsList]);
    localStorage.setItem('@penseapp:cart', JSON.stringify([...productsList]));
  }, [products]);
  const decrement = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(product => {
    const productsList = products;
    const index = products.findIndex(item => item.id === product.id);

    if (productsList[index].quantity > 1) {
      productsList[index].quantity -= 1;
      setProducts([...productsList]);
    } else {
      const response = confirm('Remover o produto do carrinho?');

      if (response) {
        productsList.splice(index, 1);
        setProducts([...productsList]);
      }
    }

    localStorage.setItem('@penseapp:cart', JSON.stringify([...products]));
  }, [products]);
  const totalItensInCart = products.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  const value = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
    addToCart,
    products,
    totalItensInCart,
    increment,
    decrement
  }), [addToCart, products, totalItensInCart, increment, decrement]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {
    value: value,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 147,
    columnNumber: 10
  }, this);
}

const useCart = () => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};



/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useCart */ "./src/hooks/useCart.tsx");
/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/global */ "./styles/global.ts");


var _jsxFileName = "C:\\Users\\sacul\\Documents\\dev\\penseApp\\frontend\\challenge-flutter-fullstack\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hooks_useCart__WEBPACK_IMPORTED_MODULE_1__.CartProvider, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/global.ts":
/*!**************************!*\
  !*** ./styles/global.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #fff;
    color: #8257e5;
    -webkit-font-smoothing: antialiased;
    margin: 0 auto;
    margin-bottom: 40px;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZW5zZV9hcHAvLi9zcmMvaG9va3MvdXNlQ2FydC50c3giLCJ3ZWJwYWNrOi8vcGVuc2VfYXBwLy4vc3JjL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL3BlbnNlX2FwcC8uL3N0eWxlcy9nbG9iYWwudHMiLCJ3ZWJwYWNrOi8vcGVuc2VfYXBwL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9wZW5zZV9hcHAvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9wZW5zZV9hcHAvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkNhcnRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNhcnRQcm92aWRlciIsImNoaWxkcmVuIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZGF0YSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJhZGRUb0NhcnQiLCJ1c2VDYWxsYmFjayIsInByb2R1Y3QiLCJwcm9kdWN0SW5kZXgiLCJmaW5kSW5kZXgiLCJpdGVtIiwiaWQiLCJzdGF0dXNGbGFnIiwicHJvZHVjdHNMaXN0IiwicXVhbnRpdHkiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwibmV3UHJvZHVjdCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwicHJvbW9QcmljZSIsImltYWdlVXJsIiwiY2F0ZWdvcnkiLCJFcnJvciIsImluY3JlbWVudCIsImluZGV4IiwiZGVjcmVtZW50IiwicmVzcG9uc2UiLCJjb25maXJtIiwic3BsaWNlIiwidG90YWxJdGVuc0luQ2FydCIsInJlZHVjZSIsInRvdGFsIiwidmFsdWUiLCJ1c2VNZW1vIiwidXNlQ2FydCIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjcmVhdGVHbG9iYWxTdHlsZSJdLCJtYXBwaW5ncyI6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QUNBLENBNUJBLEU7Ozs7Ozs7Ozs7O0FDRkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLWFsZXJ0ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAqL1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZUNvbnRleHQsXHJcbiAgUmVhY3ROb2RlLFxyXG4gIHVzZUNhbGxiYWNrLFxyXG4gIHVzZUVmZmVjdCxcclxuICB1c2VNZW1vLFxyXG4gIHVzZVN0YXRlLFxyXG4gIHVzZUNvbnRleHQsXHJcbn0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIFByb2R1Y3Qge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgcHJpY2U6IG51bWJlcjtcclxuICBwcm9tb1ByaWNlOiBudW1iZXI7XHJcbiAgc3RhdHVzRmxhZzogc3RyaW5nO1xyXG4gIGltYWdlVXJsOiBzdHJpbmc7XHJcbiAgY2F0ZWdvcnk6IHN0cmluZztcclxuICBxdWFudGl0eTogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2FydENvbnRleHQge1xyXG4gIHByb2R1Y3RzOiBQcm9kdWN0W107XHJcbiAgYWRkVG9DYXJ0KGl0ZW06IE9taXQ8UHJvZHVjdCwgJ3F1YW50aXR5Jz4pOiB2b2lkO1xyXG4gIHRvdGFsSXRlbnNJbkNhcnQ6IG51bWJlcjtcclxuICBpbmNyZW1lbnQ6IChpdGVtOiBQcm9kdWN0KSA9PiB2b2lkO1xyXG4gIGRlY3JlbWVudDogKGl0ZW06IFByb2R1Y3QpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDYXJ0UHJvdmlkZXJQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENhcnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxDYXJ0Q29udGV4dCB8IG51bGw+KG51bGwpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydFByb3ZpZGVyKHtcclxuICBjaGlsZHJlbixcclxufTogQ2FydFByb3ZpZGVyUHJvcHMpOiBKU1guRWxlbWVudCB7XHJcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZTxQcm9kdWN0W10+KFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQHBlbnNlYXBwOmNhcnQnKTtcclxuXHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBzZXRQcm9kdWN0cyhKU09OLnBhcnNlKGRhdGEpKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGFkZFRvQ2FydCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgcHJvZHVjdCA9PiB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3RJbmRleCA9IHByb2R1Y3RzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQgPT09IHByb2R1Y3QuaWQpO1xyXG5cclxuICAgICAgaWYgKHByb2R1Y3Quc3RhdHVzRmxhZyA9PT0gJ0F0aXZvJykge1xyXG4gICAgICAgIGlmIChwcm9kdWN0SW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgY29uc3QgcHJvZHVjdHNMaXN0ID0gcHJvZHVjdHM7XHJcbiAgICAgICAgICBwcm9kdWN0c0xpc3RbcHJvZHVjdEluZGV4XS5xdWFudGl0eSArPSAxO1xyXG4gICAgICAgICAgc2V0UHJvZHVjdHMoWy4uLnByb2R1Y3RzTGlzdF0pO1xyXG5cclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICAgICAgICAnQHBlbnNlYXBwOmNhcnQnLFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShbLi4ucHJvZHVjdHNMaXN0XSksXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBuZXdQcm9kdWN0OiBQcm9kdWN0ID0ge1xyXG4gICAgICAgICAgICBpZDogcHJvZHVjdC5pZCxcclxuICAgICAgICAgICAgbmFtZTogcHJvZHVjdC5uYW1lLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvZHVjdC5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgcHJpY2U6IHByb2R1Y3QucHJpY2UsXHJcbiAgICAgICAgICAgIHByb21vUHJpY2U6IHByb2R1Y3QucHJvbW9QcmljZSxcclxuICAgICAgICAgICAgc3RhdHVzRmxhZzogcHJvZHVjdC5zdGF0dXNGbGFnLFxyXG4gICAgICAgICAgICBpbWFnZVVybDogcHJvZHVjdC5pbWFnZVVybCxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IHByb2R1Y3QuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgIHF1YW50aXR5OiAxLFxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBzZXRQcm9kdWN0cyhbLi4ucHJvZHVjdHMsIG5ld1Byb2R1Y3RdKTtcclxuXHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgICAgICAgJ0BwZW5zZWFwcDpjYXJ0JyxcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoWy4uLnByb2R1Y3RzLCBuZXdQcm9kdWN0XSksXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Byb2R1dG8gaW5kaXNwb27DrXZlbCBubyBlc3RvcXVlJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbcHJvZHVjdHNdLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGluY3JlbWVudCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgcHJvZHVjdCA9PiB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3RzTGlzdCA9IHByb2R1Y3RzO1xyXG5cclxuICAgICAgY29uc3QgaW5kZXggPSBwcm9kdWN0cy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmlkID09PSBwcm9kdWN0LmlkKTtcclxuICAgICAgcHJvZHVjdHNMaXN0W2luZGV4XS5xdWFudGl0eSArPSAxO1xyXG5cclxuICAgICAgc2V0UHJvZHVjdHMoWy4uLnByb2R1Y3RzTGlzdF0pO1xyXG5cclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0BwZW5zZWFwcDpjYXJ0JywgSlNPTi5zdHJpbmdpZnkoWy4uLnByb2R1Y3RzTGlzdF0pKTtcclxuICAgIH0sXHJcbiAgICBbcHJvZHVjdHNdLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGRlY3JlbWVudCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgcHJvZHVjdCA9PiB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3RzTGlzdCA9IHByb2R1Y3RzO1xyXG5cclxuICAgICAgY29uc3QgaW5kZXggPSBwcm9kdWN0cy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmlkID09PSBwcm9kdWN0LmlkKTtcclxuXHJcbiAgICAgIGlmIChwcm9kdWN0c0xpc3RbaW5kZXhdLnF1YW50aXR5ID4gMSkge1xyXG4gICAgICAgIHByb2R1Y3RzTGlzdFtpbmRleF0ucXVhbnRpdHkgLT0gMTtcclxuXHJcbiAgICAgICAgc2V0UHJvZHVjdHMoWy4uLnByb2R1Y3RzTGlzdF0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gY29uZmlybSgnUmVtb3ZlciBvIHByb2R1dG8gZG8gY2FycmluaG8/Jyk7XHJcblxyXG4gICAgICAgIGlmIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgcHJvZHVjdHNMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICAgICAgc2V0UHJvZHVjdHMoWy4uLnByb2R1Y3RzTGlzdF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0BwZW5zZWFwcDpjYXJ0JywgSlNPTi5zdHJpbmdpZnkoWy4uLnByb2R1Y3RzXSkpO1xyXG4gICAgfSxcclxuICAgIFtwcm9kdWN0c10sXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgdG90YWxJdGVuc0luQ2FydCA9IHByb2R1Y3RzLnJlZHVjZSgodG90YWwsIGl0ZW0pID0+IHtcclxuICAgIHJldHVybiB0b3RhbCArIGl0ZW0ucXVhbnRpdHk7XHJcbiAgfSwgMCk7XHJcblxyXG4gIGNvbnN0IHZhbHVlID0gdXNlTWVtbyhcclxuICAgICgpID0+ICh7XHJcbiAgICAgIGFkZFRvQ2FydCxcclxuICAgICAgcHJvZHVjdHMsXHJcbiAgICAgIHRvdGFsSXRlbnNJbkNhcnQsXHJcbiAgICAgIGluY3JlbWVudCxcclxuICAgICAgZGVjcmVtZW50LFxyXG4gICAgfSksXHJcbiAgICBbYWRkVG9DYXJ0LCBwcm9kdWN0cywgdG90YWxJdGVuc0luQ2FydCwgaW5jcmVtZW50LCBkZWNyZW1lbnRdLFxyXG4gICk7XHJcblxyXG4gIHJldHVybiA8Q2FydENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT57Y2hpbGRyZW59PC9DYXJ0Q29udGV4dC5Qcm92aWRlcj47XHJcbn1cclxuXHJcbmNvbnN0IHVzZUNhcnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ2FydENvbnRleHQpO1xyXG5cclxuICBpZiAoIWNvbnRleHQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcigndXNlQ2FydCBtdXN0IGJlIHVzZWQgd2l0aGluIGEgQ2FydFByb3ZpZGVyJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29udGV4dDtcclxufTtcclxuXHJcbmV4cG9ydCB7IENhcnRQcm92aWRlciwgdXNlQ2FydCB9O1xyXG4iLCJpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IHsgQ2FydFByb3ZpZGVyIH0gZnJvbSAnLi4vaG9va3MvdXNlQ2FydCc7XHJcbmltcG9ydCBHbG9iYWxTdHlsZSBmcm9tICcuLi8uLi9zdHlsZXMvZ2xvYmFsJztcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgIDxDYXJ0UHJvdmlkZXI+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L0NhcnRQcm92aWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gICoge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gIH1cclxuXHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgY29sb3I6ICM4MjU3ZTU7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICB9XHJcblxyXG4gIGJvZHksIGlucHV0LCBidXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgc3Ryb25nIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuYDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=