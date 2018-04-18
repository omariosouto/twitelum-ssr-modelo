exports.id = 0;
exports.modules = {

/***/ "./src/components/NavMenu/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navMenu_css__ = __webpack_require__("./src/components/NavMenu/navMenu.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navMenu_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__navMenu_css__);





var _jsxFileName = '/Users/soutomario/Desktop/ssr-test/react-charger-razzle/src/components/NavMenu/index.js';




var NavMenu = function (_Component) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(NavMenu, _Component);

    function NavMenu() {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, NavMenu);

        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (NavMenu.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(NavMenu)).apply(this, arguments));
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(NavMenu, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'nav',
                { className: 'navMenu', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 8
                    }
                },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'ul',
                    { className: 'navMenu__lista', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 9
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        'li',
                        { className: 'navMenu__item', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 10
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            'a',
                            { className: 'navMenu__link', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 11
                                }
                            },
                            'Bem vindo(a): ',
                            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('br', {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 12
                                }
                            }),
                            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                                'strong',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 13
                                    }
                                },
                                this.props.usuario
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        'li',
                        { className: 'navMenu__item', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 16
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            'a',
                            { className: 'navMenu__link', href: '', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 17
                                }
                            },
                            'P\xE1gina Inicial'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        'li',
                        { className: 'navMenu__item', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 19
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            'a',
                            { className: 'navMenu__link', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 20
                                }
                            },
                            'Hashtags'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        'li',
                        { className: 'navMenu__item', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 22
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            'a',
                            { className: 'navMenu__link', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 23
                                }
                            },
                            'Logout'
                        )
                    )
                )
            );
        }
    }]);

    return NavMenu;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (NavMenu);

/***/ })

};
//# sourceMappingURL=0.6f8f3c0101ddcade2f1a.hot-update.js.map