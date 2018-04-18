exports.id = 0;
exports.modules = {

/***/ "./src/pages/LoginPage/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__("babel-runtime/core-js/json/stringify");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Widget__ = __webpack_require__("./src/components/Widget/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__loginPage_css__ = __webpack_require__("./src/pages/LoginPage/loginPage.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__loginPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__loginPage_css__);






var _jsxFileName = '/Users/soutomario/Desktop/ssr-test/react-charger-razzle/src/pages/LoginPage/index.js';





var LoginPage = function (_Component) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(LoginPage, _Component);

    function LoginPage() {
        var _ref;

        var _temp, _this, _ret;

        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, LoginPage);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = LoginPage.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(LoginPage)).call.apply(_ref, [this].concat(args))), _this), _this.fazerLogin = function (event) {
            event.preventDefault();

            // console.log(this.inputLogin.value)
            // console.log(this.inputSenha.value)
            var dadosDeLogin = {
                login: _this.inputLogin.value,
                senha: _this.inputSenha.value
            };

            fetch('http://twitelum-api.herokuapp.com/login', {
                method: 'POST',
                body: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(dadosDeLogin)
            })
            // .then(dados => console.log(dados))
            .then(function (response) {
                if (!response.ok) throw response;
                return response.json();
            }).then(function (responseEmJSON) {
                // Devemos criar um cookie que será resgatado no back-end
                // document.cookie = `X-AUTH-TOKEN=${responseEmJSON.token}`
                localStorage.setItem('TOKEN', responseEmJSON.token);
                _this.props.history.push('/');
            }).catch(function (responseError) {
                responseError.json().then(function (response) {
                    console.log(response);
                });
            });
        }, _temp), __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
    }

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(LoginPage, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                { className: 'loginPage', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 43
                    }
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    { className: 'container', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 44
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7__components_Widget__["a" /* default */],
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 45
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                            'h1',
                            { className: 'loginPage__title', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 46
                                }
                            },
                            'Twitelum'
                        ),
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                            'form',
                            { className: 'loginPage__form', action: '/', onSubmit: this.fazerLogin, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 47
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                                'div',
                                { className: 'loginPage__inputWrap', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 48
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                                    'label',
                                    { className: 'loginPage__label', htmlFor: 'login', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 49
                                        }
                                    },
                                    'Login'
                                ),
                                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('input', { ref: function ref(inputLogin) {
                                        return _this2.inputLogin = inputLogin;
                                    }, className: 'loginPage__input', type: 'text', id: 'login', name: 'login', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 50
                                    }
                                })
                            ),
                            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                                'div',
                                { className: 'loginPage__inputWrap', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 52
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                                    'label',
                                    { className: 'loginPage__label', htmlFor: 'senha', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 53
                                        }
                                    },
                                    'Senha'
                                ),
                                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('input', { ref: function ref(inputSenha) {
                                        return _this2.inputSenha = inputSenha;
                                    }, className: 'loginPage__input', type: 'password', id: 'senha', name: 'senha', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 54
                                    }
                                })
                            ),
                            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                                'div',
                                { className: 'loginPage__inputWrap', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 59
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                                    'button',
                                    { className: 'loginPage__btnLogin', type: 'submit', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 60
                                        }
                                    },
                                    'Logar'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return LoginPage;
}(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (LoginPage);

/***/ })

};
//# sourceMappingURL=0.d7b8ed4651b0de830023.hot-update.js.map