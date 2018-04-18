exports.id = 0;
exports.modules = {

/***/ "./src/routes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_Home__ = __webpack_require__("./src/pages/Home/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_LoginPage__ = __webpack_require__("./src/pages/LoginPage/index.js");






var _jsxFileName = '/Users/soutomario/Desktop/ssr-test/react-charger-razzle/src/routes.js';



// Páginas



// Código da autenticação


// import Loadable from 'react-loadable'
// const Home = Loadable({
//     loader: () => import('./pages/Home'),
//     loading: () => null,
//   });

function estaAutenticado() {
    var navegador = typeof window !== 'undefined';
    if (navegador) {
        if (localStorage.getItem('TOKEN')) {
            return true;
        } else {
            return false;
        }
    }
    return true;
}

var PrivateRoute = function (_Component) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(PrivateRoute, _Component);

    function PrivateRoute() {
        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, PrivateRoute);

        return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (PrivateRoute.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(PrivateRoute)).apply(this, arguments));
    }

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(PrivateRoute, [{
        key: 'render',
        value: function render() {
            var props = this.props;

            if (estaAutenticado()) {
                return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["Route"], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 34
                    }
                }));
            } else {
                return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["Redirect"], { to: '/login', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 36
                    }
                });
            }
        }
    }]);

    return PrivateRoute;
}(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);

var Roteamento = function Roteamento() {
    return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7_react_router_dom__["Switch"],
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 43
            }
        },
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(PrivateRoute, { path: '/', component: __WEBPACK_IMPORTED_MODULE_8__pages_Home__["a" /* default */], exact: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 44
            }
        }),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["Route"], { path: '/login', component: __WEBPACK_IMPORTED_MODULE_9__pages_LoginPage__["a" /* default */], __source: {
                fileName: _jsxFileName,
                lineNumber: 45
            }
        }),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["Route"], { path: '/usuarios/:login', component: __WEBPACK_IMPORTED_MODULE_9__pages_LoginPage__["a" /* default */], __source: {
                fileName: _jsxFileName,
                lineNumber: 46
            }
        }),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["Route"], { path: '*', component: function component() {
                return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 47
                        }
                    },
                    'P\xE1gina 404'
                );
            }, __source: {
                fileName: _jsxFileName,
                lineNumber: 47
            }
        })
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Roteamento);

/***/ })

};
//# sourceMappingURL=0.92233a20f24bf8701ccc.hot-update.js.map