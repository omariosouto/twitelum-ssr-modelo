exports.id = 0;
exports.modules = {

/***/ "./src/pages/Home/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Cabecalho__ = __webpack_require__("./src/components/Cabecalho/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_NavMenu__ = __webpack_require__("./src/components/NavMenu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Dashboard__ = __webpack_require__("./src/components/Dashboard/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Widget__ = __webpack_require__("./src/components/Widget/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_TrendsArea__ = __webpack_require__("./src/components/TrendsArea/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__containers_TweetPadrao__ = __webpack_require__("./src/containers/TweetPadrao.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_Modal__ = __webpack_require__("./src/components/Modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__api_TweetsAPI__ = __webpack_require__("./src/api/TweetsAPI.js");







var _jsxFileName = '/Users/soutomario/Desktop/ssr-test/react-charger-razzle/src/pages/Home/index.js';













var Home = function (_Component) {
    __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Home, _Component);

    function Home(props) {
        __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Home);

        var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Home.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Home)).call(this));

        _this.abreModalParaTweet = function (event, IDtweetSelecionado) {
            var isTweetFooter = event.target.closest('.tweet__footer');

            if (isTweetFooter) return false;

            var tweetSelecionado = _this.state.tweets.find(function (tweet) {
                return tweet._id === IDtweetSelecionado;
            });

            console.log(tweetSelecionado, _this.state);

            _this.context.store.dispatch({ type: 'ADD_TWEET_ATIVO', tweetSelecionado: tweetSelecionado });
        };

        _this.fechaModal = function (event) {
            var isModal = event.target.closest('.widget');
            if (!isModal) {
                console.log('Fecha o modal');
                _this.context.store.dispatch({ type: 'REMOVE_TWEET_ATIVO' });
            }
        };

        _this.state = {
            novoTweet: '',
            tweetAtivo: {},
            tweets: []
        };

        var isServer = props.staticContext;
        if (isServer) {
            _this.state = {
                novoTweet: '',
                tweetAtivo: {},
                tweets: props.staticContext.tweets.lista || []
            };
        } else {
            var preloadedTweets = window.__PRELOADED_STATE__.tweets || {};
            _this.state = {
                novoTweet: '',
                tweetAtivo: {},
                tweets: preloadedTweets.lista || []
                //   delete window.__PRELOADED_STATE__.tweets
            };
        }

        _this.adicionaTweet = _this.adicionaTweet.bind(_this);
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Home, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            this.context.store.subscribe(function () {
                _this2.setState({
                    tweets: _this2.context.store.getState().tweets.lista,
                    tweetAtivo: _this2.context.store.getState().tweets.tweetAtivo
                });
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.context.store.dispatch(__WEBPACK_IMPORTED_MODULE_16__api_TweetsAPI__["b" /* carrega */]());
        }
    }, {
        key: 'adicionaTweet',
        value: function adicionaTweet(event) {
            event.preventDefault();
            this.context.store.dispatch(__WEBPACK_IMPORTED_MODULE_16__api_TweetsAPI__["a" /* adiciona */](this.state.novoTweet));
            this.setState({
                novoTweet: ''
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_react__["Fragment"],
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 99
                    }
                },
                __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_8__components_Cabecalho__["a" /* default */],
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 100
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_NavMenu__["a" /* default */], { usuario: '@omariosouto', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 101
                        }
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                    'div',
                    { className: 'container', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 103
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_10__components_Dashboard__["a" /* default */],
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 104
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_11__components_Widget__["a" /* default */],
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 105
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                                'form',
                                { className: 'novoTweet', onSubmit: this.adicionaTweet, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 106
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                                    'div',
                                    { className: 'novoTweet__editorArea', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 107
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                                        'span',
                                        {
                                            className: '\n                                  novoTweet__status\n                                  ' + (this.state.novoTweet.length > 140 ? 'novoTweet__status--invalido' : '') + '\n                              ', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 108
                                            }
                                        },
                                        this.state.novoTweet.length,
                                        '/140'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement('textarea', {
                                        className: 'novoTweet__editor',
                                        value: this.state.novoTweet,
                                        onInput: function onInput(event) {
                                            return _this3.setState({ novoTweet: event.target.value });
                                        },
                                        placeholder: 'O que est\xE1 acontecendo?', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 116
                                        }
                                    })
                                ),
                                __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                                    'button',
                                    { className: 'novoTweet__envia',
                                        disabled: this.state.novoTweet.length > 140 ? true : false,
                                        type: 'submit', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 123
                                        }
                                    },
                                    'Tweetar'
                                )
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_11__components_Widget__["a" /* default */],
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 130
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_TrendsArea__["a" /* default */], {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 131
                                }
                            })
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_10__components_Dashboard__["a" /* default */],
                        { posicao: 'centro', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 134
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_11__components_Widget__["a" /* default */],
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 135
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                                'div',
                                { className: 'tweetsArea', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 136
                                    }
                                },
                                this.state.tweets.length === 0 ? 'Nenhum tweet encontrado :(' : '',
                                this.state.tweets.map(function (tweetInfo, index) {
                                    return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__containers_TweetPadrao__["a" /* default */], {
                                        key: tweetInfo._id,
                                        texto: tweetInfo.conteudo,
                                        handleAbreModalParaTweet: function handleAbreModalParaTweet(event) {
                                            return _this3.abreModalParaTweet(event, tweetInfo._id);
                                        },
                                        tweetInfo: tweetInfo, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 140
                                        }
                                    });
                                })
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_14__components_Modal__["a" /* default */],
                    { fechaModal: this.fechaModal, isAberto: !!this.state.tweetAtivo._id, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 152
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_11__components_Widget__["a" /* default */],
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 153
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__containers_TweetPadrao__["a" /* default */], {
                            key: this.state.tweetAtivo._id,
                            texto: this.state.tweetAtivo.conteudo || '',
                            tweetInModal: true,
                            tweetInfo: this.state.tweetAtivo, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 154
                            }
                        })
                    )
                ),
                this.context.store.getState().notificacao && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                    'div',
                    { className: 'notificacaoMsg', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 163
                        }
                    },
                    this.context.store.getState().notificacao
                )
            );
        }
    }], [{
        key: 'getInitialData',
        value: function () {
            var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(requestInfo) {
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                console.log(requestInfo.cookies);
                                _context.next = 3;
                                return fetch('https://twitelum-api.herokuapp.com/tweets?X-AUTH-TOKEN=' + requestInfo.cookies['X-AUTH-TOKEN']).then(function (response) {
                                    return response.json();
                                }).catch(function (err) {
                                    return console.log(err);
                                });

                            case 3:
                                _context.t0 = _context.sent;
                                _context.t1 = {};
                                _context.t2 = {
                                    novoTweet: '',
                                    lista: _context.t0,
                                    tweetAtivo: _context.t1
                                };
                                return _context.abrupt('return', {
                                    tweets: _context.t2
                                });

                            case 7:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialData(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialData;
        }()
    }]);

    return Home;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

Home.contextTypes = {
    store: __WEBPACK_IMPORTED_MODULE_15_prop_types___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ })

};
//# sourceMappingURL=0.7f467d6fe25d3bd5b9d4.hot-update.js.map