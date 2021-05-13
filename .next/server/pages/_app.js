/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context.tsx":
/*!*************************!*\
  !*** ./src/context.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CartContext\": function() { return /* binding */ CartContext; },\n/* harmony export */   \"default\": function() { return /* binding */ CartProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/jean/Documents/penseApp/frontend/challenge-flutter-fullstack/src/context.tsx\";\n\nconst CartContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nfunction CartProvider({\n  children\n}) {\n  const {\n    0: products,\n    1: setProducts\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    console.log(products);\n  }, [products]);\n  const addToCart = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(product => {\n    const productIndex = products.findIndex(item => item.id === product.id);\n\n    if (product.statusFlag === 'Ativo') {\n      if (productIndex >= 0) {\n        const productsList = products;\n        productsList[productIndex].quantity += 1;\n        setProducts([...productsList]);\n      } else {\n        const newProduct = {\n          id: product.id,\n          name: product.name,\n          description: product.description,\n          price: product.price,\n          promoPrice: product.promoPrice,\n          statusFlag: product.statusFlag,\n          category: product.category,\n          quantity: 1\n        };\n        setProducts([...products, newProduct]);\n      }\n    } else {\n      throw new Error('Produto indisponível no estoque');\n    }\n  }, [products]);\n  const totalItensInCart = products.reduce((total, item) => {\n    return total + item.quantity;\n  }, 0);\n  const value = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({\n    addToCart,\n    products,\n    totalItensInCart\n  }), [addToCart, products, totalItensInCart]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n    value: value,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 85,\n    columnNumber: 10\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZW5zZV9hcHAvLi9zcmMvY29udGV4dC50c3g/ZDU5MSJdLCJuYW1lcyI6WyJDYXJ0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDYXJ0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJhZGRUb0NhcnQiLCJ1c2VDYWxsYmFjayIsInByb2R1Y3QiLCJwcm9kdWN0SW5kZXgiLCJmaW5kSW5kZXgiLCJpdGVtIiwiaWQiLCJzdGF0dXNGbGFnIiwicHJvZHVjdHNMaXN0IiwicXVhbnRpdHkiLCJuZXdQcm9kdWN0IiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJwcm9tb1ByaWNlIiwiY2F0ZWdvcnkiLCJFcnJvciIsInRvdGFsSXRlbnNJbkNhcnQiLCJyZWR1Y2UiLCJ0b3RhbCIsInZhbHVlIiwidXNlTWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQThCTyxNQUFNQSxXQUFXLGdCQUFHQyxvREFBYSxDQUFxQixJQUFyQixDQUFqQztBQUVRLFNBQVNDLFlBQVQsQ0FBc0I7QUFDbkNDO0FBRG1DLENBQXRCLEVBRW9CO0FBQ2pDLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsK0NBQVEsQ0FBWSxFQUFaLENBQXhDO0FBRUFDLGtEQUFTLENBQUMsTUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsUUFBWjtBQUNELEdBRlEsRUFFTixDQUFDQSxRQUFELENBRk0sQ0FBVDtBQUlBLFFBQU1NLFNBQVMsR0FBR0Msa0RBQVcsQ0FDM0JDLE9BQU8sSUFBSTtBQUNULFVBQU1DLFlBQVksR0FBR1QsUUFBUSxDQUFDVSxTQUFULENBQW1CQyxJQUFJLElBQUlBLElBQUksQ0FBQ0MsRUFBTCxLQUFZSixPQUFPLENBQUNJLEVBQS9DLENBQXJCOztBQUVBLFFBQUlKLE9BQU8sQ0FBQ0ssVUFBUixLQUF1QixPQUEzQixFQUFvQztBQUNsQyxVQUFJSixZQUFZLElBQUksQ0FBcEIsRUFBdUI7QUFDckIsY0FBTUssWUFBWSxHQUFHZCxRQUFyQjtBQUNBYyxvQkFBWSxDQUFDTCxZQUFELENBQVosQ0FBMkJNLFFBQTNCLElBQXVDLENBQXZDO0FBQ0FkLG1CQUFXLENBQUMsQ0FBQyxHQUFHYSxZQUFKLENBQUQsQ0FBWDtBQUNELE9BSkQsTUFJTztBQUNMLGNBQU1FLFVBQW1CLEdBQUc7QUFDMUJKLFlBQUUsRUFBRUosT0FBTyxDQUFDSSxFQURjO0FBRTFCSyxjQUFJLEVBQUVULE9BQU8sQ0FBQ1MsSUFGWTtBQUcxQkMscUJBQVcsRUFBRVYsT0FBTyxDQUFDVSxXQUhLO0FBSTFCQyxlQUFLLEVBQUVYLE9BQU8sQ0FBQ1csS0FKVztBQUsxQkMsb0JBQVUsRUFBRVosT0FBTyxDQUFDWSxVQUxNO0FBTTFCUCxvQkFBVSxFQUFFTCxPQUFPLENBQUNLLFVBTk07QUFPMUJRLGtCQUFRLEVBQUViLE9BQU8sQ0FBQ2EsUUFQUTtBQVExQk4sa0JBQVEsRUFBRTtBQVJnQixTQUE1QjtBQVdBZCxtQkFBVyxDQUFDLENBQUMsR0FBR0QsUUFBSixFQUFjZ0IsVUFBZCxDQUFELENBQVg7QUFDRDtBQUNGLEtBbkJELE1BbUJPO0FBQ0wsWUFBTSxJQUFJTSxLQUFKLENBQVUsaUNBQVYsQ0FBTjtBQUNEO0FBQ0YsR0ExQjBCLEVBMkIzQixDQUFDdEIsUUFBRCxDQTNCMkIsQ0FBN0I7QUE4QkEsUUFBTXVCLGdCQUFnQixHQUFHdkIsUUFBUSxDQUFDd0IsTUFBVCxDQUFnQixDQUFDQyxLQUFELEVBQVFkLElBQVIsS0FBaUI7QUFDeEQsV0FBT2MsS0FBSyxHQUFHZCxJQUFJLENBQUNJLFFBQXBCO0FBQ0QsR0FGd0IsRUFFdEIsQ0FGc0IsQ0FBekI7QUFJQSxRQUFNVyxLQUFLLEdBQUdDLDhDQUFPLENBQ25CLE9BQU87QUFDTHJCLGFBREs7QUFFTE4sWUFGSztBQUdMdUI7QUFISyxHQUFQLENBRG1CLEVBTW5CLENBQUNqQixTQUFELEVBQVlOLFFBQVosRUFBc0J1QixnQkFBdEIsQ0FObUIsQ0FBckI7QUFTQSxzQkFBTyw4REFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUVHLEtBQTdCO0FBQUEsY0FBcUMzQjtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRCIsImZpbGUiOiIuL3NyYy9jb250ZXh0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNyZWF0ZUNvbnRleHQsXG4gIFJlYWN0Tm9kZSxcbiAgdXNlQ2FsbGJhY2ssXG4gIHVzZUVmZmVjdCxcbiAgdXNlTWVtbyxcbiAgdXNlU3RhdGUsXG59IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIFByb2R1Y3Qge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHByaWNlOiBudW1iZXI7XG4gIHByb21vUHJpY2U6IG51bWJlcjtcbiAgc3RhdHVzRmxhZzogc3RyaW5nO1xuICBjYXRlZ29yeTogc3RyaW5nO1xuICBxdWFudGl0eTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQ2FydENvbnRleHQge1xuICBwcm9kdWN0czogUHJvZHVjdFtdO1xuICBhZGRUb0NhcnQoaXRlbTogT21pdDxQcm9kdWN0LCAncXVhbnRpdHknPik6IHZvaWQ7XG4gIHRvdGFsSXRlbnNJbkNhcnQ6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIENhcnRQcm92aWRlclByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cblxuZXhwb3J0IGNvbnN0IENhcnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxDYXJ0Q29udGV4dCB8IG51bGw+KG51bGwpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJ0UHJvdmlkZXIoe1xuICBjaGlsZHJlbixcbn06IENhcnRQcm92aWRlclByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlPFByb2R1Y3RbXT4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2cocHJvZHVjdHMpO1xuICB9LCBbcHJvZHVjdHNdKTtcblxuICBjb25zdCBhZGRUb0NhcnQgPSB1c2VDYWxsYmFjayhcbiAgICBwcm9kdWN0ID0+IHtcbiAgICAgIGNvbnN0IHByb2R1Y3RJbmRleCA9IHByb2R1Y3RzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQgPT09IHByb2R1Y3QuaWQpO1xuXG4gICAgICBpZiAocHJvZHVjdC5zdGF0dXNGbGFnID09PSAnQXRpdm8nKSB7XG4gICAgICAgIGlmIChwcm9kdWN0SW5kZXggPj0gMCkge1xuICAgICAgICAgIGNvbnN0IHByb2R1Y3RzTGlzdCA9IHByb2R1Y3RzO1xuICAgICAgICAgIHByb2R1Y3RzTGlzdFtwcm9kdWN0SW5kZXhdLnF1YW50aXR5ICs9IDE7XG4gICAgICAgICAgc2V0UHJvZHVjdHMoWy4uLnByb2R1Y3RzTGlzdF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG5ld1Byb2R1Y3Q6IFByb2R1Y3QgPSB7XG4gICAgICAgICAgICBpZDogcHJvZHVjdC5pZCxcbiAgICAgICAgICAgIG5hbWU6IHByb2R1Y3QubmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9kdWN0LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcHJpY2U6IHByb2R1Y3QucHJpY2UsXG4gICAgICAgICAgICBwcm9tb1ByaWNlOiBwcm9kdWN0LnByb21vUHJpY2UsXG4gICAgICAgICAgICBzdGF0dXNGbGFnOiBwcm9kdWN0LnN0YXR1c0ZsYWcsXG4gICAgICAgICAgICBjYXRlZ29yeTogcHJvZHVjdC5jYXRlZ29yeSxcbiAgICAgICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBzZXRQcm9kdWN0cyhbLi4ucHJvZHVjdHMsIG5ld1Byb2R1Y3RdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcm9kdXRvIGluZGlzcG9uw612ZWwgbm8gZXN0b3F1ZScpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW3Byb2R1Y3RzXSxcbiAgKTtcblxuICBjb25zdCB0b3RhbEl0ZW5zSW5DYXJ0ID0gcHJvZHVjdHMucmVkdWNlKCh0b3RhbCwgaXRlbSkgPT4ge1xuICAgIHJldHVybiB0b3RhbCArIGl0ZW0ucXVhbnRpdHk7XG4gIH0sIDApO1xuXG4gIGNvbnN0IHZhbHVlID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgYWRkVG9DYXJ0LFxuICAgICAgcHJvZHVjdHMsXG4gICAgICB0b3RhbEl0ZW5zSW5DYXJ0LFxuICAgIH0pLFxuICAgIFthZGRUb0NhcnQsIHByb2R1Y3RzLCB0b3RhbEl0ZW5zSW5DYXJ0XSxcbiAgKTtcblxuICByZXR1cm4gPENhcnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+e2NoaWxkcmVufTwvQ2FydENvbnRleHQuUHJvdmlkZXI+O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ \"./src/context.tsx\");\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/global */ \"./styles/global.ts\");\n\n\nvar _jsxFileName = \"/home/jean/Documents/penseApp/frontend/challenge-flutter-fullstack/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_1__.default, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZW5zZV9hcHAvLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBbUQ7QUFDakQsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQyw2Q0FBRDtBQUFBLDZCQUNFLDhEQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBLGtCQURGO0FBUUQ7O0FBRUQsK0RBQWVGLEtBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCBDYXJ0Q29udGV4dCBmcm9tICcuLi9jb250ZXh0JztcbmltcG9ydCBHbG9iYWxTdHlsZSBmcm9tICcuLi8uLi9zdHlsZXMvZ2xvYmFsJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgIDxDYXJ0Q29udGV4dD5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9DYXJ0Q29udGV4dD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./styles/global.ts":
/*!**************************!*\
  !*** ./styles/global.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    outline: 0;\n  }\n\n  body {\n    background: #fff;\n    color: #8257e5;\n    -webkit-font-smoothing: antialiased;\n    margin: 0 auto;\n  }\n\n  body, input, button {\n    font-family: 'Roboto', sans-serif;\n    font-size: 16px;\n  }\n\n  h1, h2, h3, h4, h5, h6, strong {\n    font-weight: 500;\n  }\n\n  button {\n    cursor: pointer;\n  }\n`);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZW5zZV9hcHAvLi9zdHlsZXMvZ2xvYmFsLnRzPzE1N2UiXSwibmFtZXMiOlsiY3JlYXRlR2xvYmFsU3R5bGUiXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBRUEsK0RBQWVBLGdFQUFrQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0EzQkEiLCJmaWxlIjoiLi9zdHlsZXMvZ2xvYmFsLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG91dGxpbmU6IDA7XG4gIH1cblxuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGNvbG9yOiAjODI1N2U1O1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgYm9keSwgaW5wdXQsIGJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHN0cm9uZyB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/global.ts\n");

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