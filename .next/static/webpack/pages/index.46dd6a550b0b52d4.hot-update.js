"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/WeatherLive.js":
/*!***************************************!*\
  !*** ./src/components/WeatherLive.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _WeatherForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WeatherForm */ \"./src/components/WeatherForm.js\");\n/* harmony import */ var _WeatherDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WeatherDisplay */ \"./src/components/WeatherDisplay.js\");\n/* harmony import */ var _ErrorDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorDisplay */ \"./src/components/ErrorDisplay.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar WeatherLive = function(param) {\n    var initialWeather = param.initialWeather, initialForecast = param.initialForecast, initialError = param.initialError;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialWeather || null), 2), weather = _useState[0], setWeather = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialForecast || null), 2), forecast = _useState1[0], setForecast = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialError || null), 2), error = _useState2[0], setError = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"bg-white\"), 2), backgroundClass = _useState3[0], setBackgroundClass = _useState3[1];\n    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"bg-black\"), 2), colorClass = _useState4[0], setColorClass = _useState4[1];\n    // Effect to update background and color classes when weather data changes\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (weather) {\n            setBackgroundClass(getBackgroundClass(weather.weather[0].description));\n            setColorClass(getColorClass(weather.weather[0].description));\n        }\n    }, [\n        weather\n    ]);\n    // Function to obtain weather and forecast data for a city\n    var fetchWeather = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__._)(function(city) {\n            var weatherResponse, weatherData, forecastResponse, forecastData, err;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            5,\n                            ,\n                            6\n                        ]);\n                        return [\n                            4,\n                            fetch(\"https://api.openweathermap.org/data/2.5/weather?q=\".concat(city, \"&units=metric&appid=\").concat(\"8b084ac7a647b5ab515dd2c2ca027d62\"))\n                        ];\n                    case 1:\n                        weatherResponse = _state.sent();\n                        //Error handling specific to weather response\n                        if (!weatherResponse.ok) {\n                            if (weatherResponse.status === 401) {\n                                throw new Error(\"API key is invalid or missing\");\n                            }\n                            if (weatherResponse.status === 404) {\n                                throw new Error(\"City not found\");\n                            }\n                            throw new Error(\"An error occurred while fetching the weather data\");\n                        }\n                        return [\n                            4,\n                            weatherResponse.json()\n                        ];\n                    case 2:\n                        weatherData = _state.sent();\n                        return [\n                            4,\n                            fetch(\"https://api.openweathermap.org/data/2.5/forecast?q=\".concat(city, \"&units=metric&appid=\").concat(\"8b084ac7a647b5ab515dd2c2ca027d62\"))\n                        ];\n                    case 3:\n                        forecastResponse = _state.sent();\n                        //Handling errors specific to the forecast response\n                        if (!forecastResponse.ok) {\n                            if (forecastResponse.status === 401) {\n                                throw new Error(\"Unauthorized: API key is invalid or missing\");\n                            }\n                            if (forecastResponse.status === 404) {\n                                throw new Error(\"Forecast not found\");\n                            }\n                            throw new Error(\"An error occurred while fetching the forecast data\");\n                        }\n                        return [\n                            4,\n                            forecastResponse.json()\n                        ];\n                    case 4:\n                        forecastData = _state.sent();\n                        // Update the state with the new data\n                        setWeather(weatherData);\n                        setForecast(forecastData);\n                        setError(null);\n                        return [\n                            3,\n                            6\n                        ];\n                    case 5:\n                        err = _state.sent();\n                        setError(err.message);\n                        setWeather(null);\n                        setForecast(null);\n                        return [\n                            3,\n                            6\n                        ];\n                    case 6:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function fetchWeather(city) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Function to get the background class based on the weather description\n    var getBackgroundClass = function(description) {\n        switch(description.toLowerCase()){\n            case \"clear sky\":\n                return \"bg-gradient-to-r from-blue-400 via-blue-200 to-blue-500\";\n            case \"few clouds\":\n                return \"bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500\";\n            case \"scattered clouds\":\n                return \"bg-gradient-to-r from-gray-500 via-gray-400 to-gray-600\";\n            case \"broken clouds\":\n                return \"bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800\";\n            case \"shower rain\":\n            case \"rain\":\n                return \"bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600\";\n            case \"light rain\":\n                return \"bg-gradient-to-r from-blue-300 via-blue-200 to-blue-400\";\n            case \"moderate rain\":\n                return \"bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700\";\n            case \"heavy intensity rain\":\n                return \"bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900\";\n            case \"heavy thunderstorm\":\n                return \"bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900\";\n            case \"overcast clouds\":\n                return \"bg-gradient-to-r from-gray-600 via-gray-500 to-gray-700\";\n            case \"thunderstorm\":\n                return \"bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900\";\n            case \"snow\":\n                return \"bg-gradient-to-r from-white via-gray-100 to-white\";\n            case \"light snow\":\n                return \"bg-gradient-to-r from-white via-gray-200 to-white\";\n            case \"heavy snow\":\n                return \"bg-gradient-to-r from-white via-gray-300 to-white\";\n            case \"smoke\":\n                return \"bg-gradient-to-r from-gray-500 via-gray-400 to-gray-600\";\n            case \"haze\":\n                return \"bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300\";\n            case \"dust\":\n                return \"bg-gradient-to-r from-gray-500 via-gray-400 to-gray-600\";\n            case \"fog\":\n                return \"bg-gradient-to-r from-gray-300 via-gray-200 to-gray-400\";\n            case \"mist\":\n                return \"bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300\";\n            default:\n                return \"bg-gradient-to-r from-white via-gray-100 to-white\";\n        }\n    };\n    // Function to get color class based on weather description\n    var getColorClass = function(description) {\n        switch(description.toLowerCase()){\n            case \"clear sky\":\n                return \"bg-blue-500\";\n            case \"few clouds\":\n                return \"bg-gray-400\";\n            case \"scattered clouds\":\n                return \"bg-gray-500\";\n            case \"broken clouds\":\n                return \"bg-gray-700\";\n            case \"shower rain\":\n            case \"rain\":\n                return \"bg-blue-500\";\n            case \"light rain\":\n                return \"bg-blue-300\";\n            case \"moderate rain\":\n                return \"bg-blue-600\";\n            case \"heavy intensity rain\":\n                return \"bg-blue-800\";\n            case \"heavy thunderstorm\":\n                return \"bg-blue-900\";\n            case \"overcast clouds\":\n                return \"bg-gray-600\";\n            case \"thunderstorm\":\n                return \"bg-blue-800\";\n            case \"snow\":\n                return \"bg-gray-100\";\n            case \"light snow\":\n                return \"bg-gray-200\";\n            case \"heavy snow\":\n                return \"bg-gray-300\";\n            case \"smoke\":\n                return \"bg-gray-500\";\n            case \"haze\":\n                return \"bg-gray-200\";\n            case \"dust\":\n                return \"bg-gray-500\";\n            case \"fog\":\n                return \"bg-gray-300\";\n            case \"mist\":\n                return \"bg-gray-200\";\n            default:\n                return \"bg-white\";\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"weatherlive-page\",\n        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(\"min-h-screen h-screen w-screen flex flex-col items-center justify-center p-4 transition-colors duration-500 overflow-auto font-serif\", backgroundClass),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold mb-6\",\n                children: \"WeatherLive\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pamel\\\\OneDrive\\\\Escritorio\\\\WeatherLive\\\\WeatherLive\\\\src\\\\components\\\\WeatherLive.js\",\n                lineNumber: 172,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WeatherForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onFetchWeather: fetchWeather,\n                buttonColor: colorClass\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pamel\\\\OneDrive\\\\Escritorio\\\\WeatherLive\\\\WeatherLive\\\\src\\\\components\\\\WeatherLive.js\",\n                lineNumber: 173,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorDisplay__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                error: error\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pamel\\\\OneDrive\\\\Escritorio\\\\WeatherLive\\\\WeatherLive\\\\src\\\\components\\\\WeatherLive.js\",\n                lineNumber: 174,\n                columnNumber: 7\n            }, _this),\n            weather && forecast ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WeatherDisplay__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                weather: weather,\n                forecast: forecast,\n                backgroundClass: colorClass\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pamel\\\\OneDrive\\\\Escritorio\\\\WeatherLive\\\\WeatherLive\\\\src\\\\components\\\\WeatherLive.js\",\n                lineNumber: 176,\n                columnNumber: 9\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading initial data...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pamel\\\\OneDrive\\\\Escritorio\\\\WeatherLive\\\\WeatherLive\\\\src\\\\components\\\\WeatherLive.js\",\n                lineNumber: 182,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\pamel\\\\OneDrive\\\\Escritorio\\\\WeatherLive\\\\WeatherLive\\\\src\\\\components\\\\WeatherLive.js\",\n        lineNumber: 165,\n        columnNumber: 5\n    }, _this);\n};\n_s(WeatherLive, \"gM0z7v4nTI3CM50VXzQpMi+imeg=\");\n_c = WeatherLive;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WeatherLive);\nvar _c;\n$RefreshReg$(_c, \"WeatherLive\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0YsOERBQUMyQjtnQkFBR0QsV0FBVTswQkFBMEI7Ozs7OzswQkFDeEMsOERBQUN4QyxvREFBV0E7Z0JBQUMwQyxnQkFBZ0JyQjtnQkFBY3NCLGFBQWEzQjs7Ozs7OzBCQUN4RCw4REFBQ2QscURBQVlBO2dCQUFDVSxPQUFPQTs7Ozs7O1lBQ3BCSixXQUFXRSx5QkFDViw4REFBQ1QsdURBQWNBO2dCQUNiTyxTQUFTQTtnQkFDVEUsVUFBVUE7Z0JBQ1ZJLGlCQUFpQkU7Ozs7O3NDQUduQiw4REFBQzRCOzBCQUFFOzs7Ozs7Ozs7Ozs7QUFJWDtHQW5MTXhDO0tBQUFBO0FBcUxOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1dlYXRoZXJMaXZlLmpzPzBjMWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgV2VhdGhlckZvcm0gZnJvbSBcIi4vV2VhdGhlckZvcm1cIjtcclxuaW1wb3J0IFdlYXRoZXJEaXNwbGF5IGZyb20gXCIuL1dlYXRoZXJEaXNwbGF5XCI7XHJcbmltcG9ydCBFcnJvckRpc3BsYXkgZnJvbSBcIi4vRXJyb3JEaXNwbGF5XCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5jb25zdCBXZWF0aGVyTGl2ZSA9ICh7IGluaXRpYWxXZWF0aGVyLCBpbml0aWFsRm9yZWNhc3QsIGluaXRpYWxFcnJvciB9KSA9PiB7XHJcbiAgY29uc3QgW3dlYXRoZXIsIHNldFdlYXRoZXJdID0gdXNlU3RhdGUoaW5pdGlhbFdlYXRoZXIgfHwgbnVsbCk7XHJcbiAgY29uc3QgW2ZvcmVjYXN0LCBzZXRGb3JlY2FzdF0gPSB1c2VTdGF0ZShpbml0aWFsRm9yZWNhc3QgfHwgbnVsbCk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShpbml0aWFsRXJyb3IgfHwgbnVsbCk7XHJcbiAgY29uc3QgW2JhY2tncm91bmRDbGFzcywgc2V0QmFja2dyb3VuZENsYXNzXSA9IHVzZVN0YXRlKFwiYmctd2hpdGVcIik7XHJcbiAgY29uc3QgW2NvbG9yQ2xhc3MsIHNldENvbG9yQ2xhc3NdID0gdXNlU3RhdGUoXCJiZy1ibGFja1wiKTtcclxuXHJcbiAgLy8gRWZmZWN0IHRvIHVwZGF0ZSBiYWNrZ3JvdW5kIGFuZCBjb2xvciBjbGFzc2VzIHdoZW4gd2VhdGhlciBkYXRhIGNoYW5nZXNcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHdlYXRoZXIpIHtcclxuICAgICAgc2V0QmFja2dyb3VuZENsYXNzKGdldEJhY2tncm91bmRDbGFzcyh3ZWF0aGVyLndlYXRoZXJbMF0uZGVzY3JpcHRpb24pKTtcclxuICAgICAgc2V0Q29sb3JDbGFzcyhnZXRDb2xvckNsYXNzKHdlYXRoZXIud2VhdGhlclswXS5kZXNjcmlwdGlvbikpO1xyXG4gICAgfVxyXG4gIH0sIFt3ZWF0aGVyXSk7XHJcblxyXG4gIC8vIEZ1bmN0aW9uIHRvIG9idGFpbiB3ZWF0aGVyIGFuZCBmb3JlY2FzdCBkYXRhIGZvciBhIGNpdHlcclxuICBjb25zdCBmZXRjaFdlYXRoZXIgPSBhc3luYyAoY2l0eSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgd2VhdGhlclJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZ1bml0cz1tZXRyaWMmYXBwaWQ9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19XRUFUSEVSX0FQSV9LRVl9YFxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy9FcnJvciBoYW5kbGluZyBzcGVjaWZpYyB0byB3ZWF0aGVyIHJlc3BvbnNlXHJcbiAgICAgIGlmICghd2VhdGhlclJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgaWYgKHdlYXRoZXJSZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQVBJIGtleSBpcyBpbnZhbGlkIG9yIG1pc3NpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh3ZWF0aGVyUmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNpdHkgbm90IGZvdW5kXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBmZXRjaGluZyB0aGUgd2VhdGhlciBkYXRhXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHdlYXRoZXJSZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICBjb25zdCBmb3JlY2FzdFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJmFwcGlkPSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfV0VBVEhFUl9BUElfS0VZfWBcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vSGFuZGxpbmcgZXJyb3JzIHNwZWNpZmljIHRvIHRoZSBmb3JlY2FzdCByZXNwb25zZVxyXG4gICAgICBpZiAoIWZvcmVjYXN0UmVzcG9uc2Uub2spIHtcclxuICAgICAgICBpZiAoZm9yZWNhc3RSZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkOiBBUEkga2V5IGlzIGludmFsaWQgb3IgbWlzc2luZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZvcmVjYXN0UmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZvcmVjYXN0IG5vdCBmb3VuZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZmV0Y2hpbmcgdGhlIGZvcmVjYXN0IGRhdGFcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGZvcmVjYXN0RGF0YSA9IGF3YWl0IGZvcmVjYXN0UmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgLy8gVXBkYXRlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgZGF0YVxyXG4gICAgICBzZXRXZWF0aGVyKHdlYXRoZXJEYXRhKTtcclxuICAgICAgc2V0Rm9yZWNhc3QoZm9yZWNhc3REYXRhKTtcclxuICAgICAgc2V0RXJyb3IobnVsbCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICBzZXRXZWF0aGVyKG51bGwpO1xyXG4gICAgICBzZXRGb3JlY2FzdChudWxsKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBGdW5jdGlvbiB0byBnZXQgdGhlIGJhY2tncm91bmQgY2xhc3MgYmFzZWQgb24gdGhlIHdlYXRoZXIgZGVzY3JpcHRpb25cclxuICBjb25zdCBnZXRCYWNrZ3JvdW5kQ2xhc3MgPSAoZGVzY3JpcHRpb24pID0+IHtcclxuICAgIHN3aXRjaCAoZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICBjYXNlIFwiY2xlYXIgc2t5XCI6XHJcbiAgICAgICAgcmV0dXJuIFwiYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtNDAwIHZpYS1ibHVlLTIwMCB0by1ibHVlLTUwMFwiO1xyXG4gICAgICBjYXNlIFwiZmV3IGNsb3Vkc1wiOlxyXG4gICAgICAgIHJldHVybiBcImJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmF5LTQwMCB2aWEtZ3JheS0zMDAgdG8tZ3JheS01MDBcIjtcclxuICAgICAgY2FzZSBcInNjYXR0ZXJlZCBjbG91ZHNcIjpcclxuICAgICAgICByZXR1cm4gXCJiZy1ncmFkaWVudC10by1yIGZyb20tZ3JheS01MDAgdmlhLWdyYXktNDAwIHRvLWdyYXktNjAwXCI7XHJcbiAgICAgIGNhc2UgXCJicm9rZW4gY2xvdWRzXCI6XHJcbiAgICAgICAgcmV0dXJuIFwiYmctZ3JhZGllbnQtdG8tciBmcm9tLWdyYXktNzAwIHZpYS1ncmF5LTYwMCB0by1ncmF5LTgwMFwiO1xyXG4gICAgICBjYXNlIFwic2hvd2VyIHJhaW5cIjpcclxuICAgICAgY2FzZSBcInJhaW5cIjpcclxuICAgICAgICByZXR1cm4gXCJiZy1ncmFkaWVudC10by1yIGZyb20tYmx1ZS01MDAgdmlhLWJsdWUtNDAwIHRvLWJsdWUtNjAwXCI7XHJcbiAgICAgIGNhc2UgXCJsaWdodCByYWluXCI6XHJcbiAgICAgICAgcmV0dXJuIFwiYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtMzAwIHZpYS1ibHVlLTIwMCB0by1ibHVlLTQwMFwiO1xyXG4gICAgICBjYXNlIFwibW9kZXJhdGUgcmFpblwiOlxyXG4gICAgICAgIHJldHVybiBcImJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTYwMCB2aWEtYmx1ZS01MDAgdG8tYmx1ZS03MDBcIjtcclxuICAgICAgY2FzZSBcImhlYXZ5IGludGVuc2l0eSByYWluXCI6XHJcbiAgICAgICAgcmV0dXJuIFwiYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtODAwIHZpYS1ibHVlLTcwMCB0by1ibHVlLTkwMFwiO1xyXG4gICAgICBjYXNlIFwiaGVhdnkgdGh1bmRlcnN0b3JtXCI6XHJcbiAgICAgICAgcmV0dXJuIFwiYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtOTAwIHZpYS1ibHVlLTgwMCB0by1ibHVlLTkwMFwiO1xyXG4gICAgICBjYXNlIFwib3ZlcmNhc3QgY2xvdWRzXCI6XHJcbiAgICAgICAgcmV0dXJuIFwiYmctZ3JhZGllbnQtdG8tciBmcm9tLWdyYXktNjAwIHZpYS1ncmF5LTUwMCB0by1ncmF5LTcwMFwiO1xyXG4gICAgICBjYXNlIFwidGh1bmRlcnN0b3JtXCI6XHJcbiAgICAgICAgcmV0dXJuIFwiYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtODAwIHZpYS1ibHVlLTcwMCB0by1ibHVlLTkwMFwiO1xyXG4gICAgICBjYXNlIFwic25vd1wiOlxyXG4gICAgICAgIHJldHVybiBcImJnLWdyYWRpZW50LXRvLXIgZnJvbS13aGl0ZSB2aWEtZ3JheS0xMDAgdG8td2hpdGVcIjtcclxuICAgICAgY2FzZSBcImxpZ2h0IHNub3dcIjpcclxuICAgICAgICByZXR1cm4gXCJiZy1ncmFkaWVudC10by1yIGZyb20td2hpdGUgdmlhLWdyYXktMjAwIHRvLXdoaXRlXCI7XHJcbiAgICAgIGNhc2UgXCJoZWF2eSBzbm93XCI6XHJcbiAgICAgICAgcmV0dXJuIFwiYmctZ3JhZGllbnQtdG8tciBmcm9tLXdoaXRlIHZpYS1ncmF5LTMwMCB0by13aGl0ZVwiO1xyXG4gICAgICBjYXNlIFwic21va2VcIjpcclxuICAgICAgICByZXR1cm4gXCJiZy1ncmFkaWVudC10by1yIGZyb20tZ3JheS01MDAgdmlhLWdyYXktNDAwIHRvLWdyYXktNjAwXCI7XHJcbiAgICAgIGNhc2UgXCJoYXplXCI6XHJcbiAgICAgICAgcmV0dXJuIFwiYmctZ3JhZGllbnQtdG8tciBmcm9tLWdyYXktMjAwIHZpYS1ncmF5LTEwMCB0by1ncmF5LTMwMFwiO1xyXG4gICAgICBjYXNlIFwiZHVzdFwiOlxyXG4gICAgICAgIHJldHVybiBcImJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmF5LTUwMCB2aWEtZ3JheS00MDAgdG8tZ3JheS02MDBcIjtcclxuICAgICAgY2FzZSBcImZvZ1wiOlxyXG4gICAgICAgIHJldHVybiBcImJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmF5LTMwMCB2aWEtZ3JheS0yMDAgdG8tZ3JheS00MDBcIjtcclxuICAgICAgY2FzZSBcIm1pc3RcIjpcclxuICAgICAgICByZXR1cm4gXCJiZy1ncmFkaWVudC10by1yIGZyb20tZ3JheS0yMDAgdmlhLWdyYXktMTAwIHRvLWdyYXktMzAwXCI7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIFwiYmctZ3JhZGllbnQtdG8tciBmcm9tLXdoaXRlIHZpYS1ncmF5LTEwMCB0by13aGl0ZVwiO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIEZ1bmN0aW9uIHRvIGdldCBjb2xvciBjbGFzcyBiYXNlZCBvbiB3ZWF0aGVyIGRlc2NyaXB0aW9uXHJcbiAgY29uc3QgZ2V0Q29sb3JDbGFzcyA9IChkZXNjcmlwdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChkZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgIGNhc2UgXCJjbGVhciBza3lcIjpcclxuICAgICAgICByZXR1cm4gXCJiZy1ibHVlLTUwMFwiO1xyXG4gICAgICBjYXNlIFwiZmV3IGNsb3Vkc1wiOlxyXG4gICAgICAgIHJldHVybiBcImJnLWdyYXktNDAwXCI7XHJcbiAgICAgIGNhc2UgXCJzY2F0dGVyZWQgY2xvdWRzXCI6XHJcbiAgICAgICAgcmV0dXJuIFwiYmctZ3JheS01MDBcIjtcclxuICAgICAgY2FzZSBcImJyb2tlbiBjbG91ZHNcIjpcclxuICAgICAgICByZXR1cm4gXCJiZy1ncmF5LTcwMFwiO1xyXG4gICAgICBjYXNlIFwic2hvd2VyIHJhaW5cIjpcclxuICAgICAgY2FzZSBcInJhaW5cIjpcclxuICAgICAgICByZXR1cm4gXCJiZy1ibHVlLTUwMFwiO1xyXG4gICAgICBjYXNlIFwibGlnaHQgcmFpblwiOlxyXG4gICAgICAgIHJldHVybiBcImJnLWJsdWUtMzAwXCI7XHJcbiAgICAgIGNhc2UgXCJtb2RlcmF0ZSByYWluXCI6XHJcbiAgICAgICAgcmV0dXJuIFwiYmctYmx1ZS02MDBcIjtcclxuICAgICAgY2FzZSBcImhlYXZ5IGludGVuc2l0eSByYWluXCI6XHJcbiAgICAgICAgcmV0dXJuIFwiYmctYmx1ZS04MDBcIjtcclxuICAgICAgY2FzZSBcImhlYXZ5IHRodW5kZXJzdG9ybVwiOlxyXG4gICAgICAgIHJldHVybiBcImJnLWJsdWUtOTAwXCI7XHJcbiAgICAgIGNhc2UgXCJvdmVyY2FzdCBjbG91ZHNcIjpcclxuICAgICAgICByZXR1cm4gXCJiZy1ncmF5LTYwMFwiO1xyXG4gICAgICBjYXNlIFwidGh1bmRlcnN0b3JtXCI6XHJcbiAgICAgICAgcmV0dXJuIFwiYmctYmx1ZS04MDBcIjtcclxuICAgICAgY2FzZSBcInNub3dcIjpcclxuICAgICAgICByZXR1cm4gXCJiZy1ncmF5LTEwMFwiO1xyXG4gICAgICBjYXNlIFwibGlnaHQgc25vd1wiOlxyXG4gICAgICAgIHJldHVybiBcImJnLWdyYXktMjAwXCI7XHJcbiAgICAgIGNhc2UgXCJoZWF2eSBzbm93XCI6XHJcbiAgICAgICAgcmV0dXJuIFwiYmctZ3JheS0zMDBcIjtcclxuICAgICAgY2FzZSBcInNtb2tlXCI6XHJcbiAgICAgICAgcmV0dXJuIFwiYmctZ3JheS01MDBcIjtcclxuICAgICAgY2FzZSBcImhhemVcIjpcclxuICAgICAgICByZXR1cm4gXCJiZy1ncmF5LTIwMFwiO1xyXG4gICAgICBjYXNlIFwiZHVzdFwiOlxyXG4gICAgICAgIHJldHVybiBcImJnLWdyYXktNTAwXCI7XHJcbiAgICAgIGNhc2UgXCJmb2dcIjpcclxuICAgICAgICByZXR1cm4gXCJiZy1ncmF5LTMwMFwiO1xyXG4gICAgICBjYXNlIFwibWlzdFwiOlxyXG4gICAgICAgIHJldHVybiBcImJnLWdyYXktMjAwXCI7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIFwiYmctd2hpdGVcIjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBpZD1cIndlYXRoZXJsaXZlLXBhZ2VcIlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgXCJtaW4taC1zY3JlZW4gaC1zY3JlZW4gdy1zY3JlZW4gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTUwMCBvdmVyZmxvdy1hdXRvIGZvbnQtc2VyaWZcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ2xhc3NcclxuICAgICAgKX1cclxuICAgID5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtYi02XCI+V2VhdGhlckxpdmU8L2gxPlxyXG4gICAgICA8V2VhdGhlckZvcm0gb25GZXRjaFdlYXRoZXI9e2ZldGNoV2VhdGhlcn0gYnV0dG9uQ29sb3I9e2NvbG9yQ2xhc3N9IC8+XHJcbiAgICAgIDxFcnJvckRpc3BsYXkgZXJyb3I9e2Vycm9yfSAvPlxyXG4gICAgICB7d2VhdGhlciAmJiBmb3JlY2FzdCA/IChcclxuICAgICAgICA8V2VhdGhlckRpc3BsYXlcclxuICAgICAgICAgIHdlYXRoZXI9e3dlYXRoZXJ9XHJcbiAgICAgICAgICBmb3JlY2FzdD17Zm9yZWNhc3R9XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ2xhc3M9e2NvbG9yQ2xhc3N9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8cD5Mb2FkaW5nIGluaXRpYWwgZGF0YS4uLjwvcD5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyTGl2ZTtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiV2VhdGhlckZvcm0iLCJXZWF0aGVyRGlzcGxheSIsIkVycm9yRGlzcGxheSIsImNsYXNzTmFtZXMiLCJXZWF0aGVyTGl2ZSIsImluaXRpYWxXZWF0aGVyIiwiaW5pdGlhbEZvcmVjYXN0IiwiaW5pdGlhbEVycm9yIiwid2VhdGhlciIsInNldFdlYXRoZXIiLCJmb3JlY2FzdCIsInNldEZvcmVjYXN0IiwiZXJyb3IiLCJzZXRFcnJvciIsImJhY2tncm91bmRDbGFzcyIsInNldEJhY2tncm91bmRDbGFzcyIsImNvbG9yQ2xhc3MiLCJzZXRDb2xvckNsYXNzIiwiZ2V0QmFja2dyb3VuZENsYXNzIiwiZGVzY3JpcHRpb24iLCJnZXRDb2xvckNsYXNzIiwiZmV0Y2hXZWF0aGVyIiwiY2l0eSIsIndlYXRoZXJSZXNwb25zZSIsIndlYXRoZXJEYXRhIiwiZm9yZWNhc3RSZXNwb25zZSIsImZvcmVjYXN0RGF0YSIsImVyciIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1dFQVRIRVJfQVBJX0tFWSIsIm9rIiwic3RhdHVzIiwiRXJyb3IiLCJqc29uIiwibWVzc2FnZSIsInRvTG93ZXJDYXNlIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJoMSIsIm9uRmV0Y2hXZWF0aGVyIiwiYnV0dG9uQ29sb3IiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/WeatherLive.js\n"));

/***/ })

});