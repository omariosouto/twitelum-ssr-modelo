exports.id = 0;
exports.modules = {

/***/ "./src/containers/TweetPadrao.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_TweetsAPI__ = __webpack_require__("./src/api/TweetsAPI.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Tweet__ = __webpack_require__("./src/components/Tweet/index.js");




// Ajustando o Container Component
var mapStateToProps = function mapStateToProps(state) {
    return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, propsRecebidas) {
    return {
        removeHandler: function removeHandler() {
            dispatch(__WEBPACK_IMPORTED_MODULE_1__api_TweetsAPI__["d" /* remove */](propsRecebidas.tweetInfo._id));
        },
        likeHandler: function likeHandler() {
            dispatch(__WEBPACK_IMPORTED_MODULE_1__api_TweetsAPI__["c" /* like */](propsRecebidas.tweetInfo._id));
        }
    };
};

var TweetPadraoContainer = Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__components_Tweet__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (TweetPadraoContainer);

/***/ }),

/***/ "./src/server/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookie_parser__ = __webpack_require__("cookie-parser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_universal_fetch__ = __webpack_require__("universal-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_universal_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_universal_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ssr_helpers_js__ = __webpack_require__("./src/server/ssr-helpers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom_server__ = __webpack_require__("react-dom/server");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Html__ = __webpack_require__("./src/components/Html/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes__ = __webpack_require__("./src/routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store__ = __webpack_require__("./src/store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_loadable__ = __webpack_require__("react-loadable");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_loadable_webpack__ = __webpack_require__("react-loadable/webpack");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_loadable_webpack___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_loadable_webpack__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__build_react_loadable_json__ = __webpack_require__("./build/react-loadable.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__build_react_loadable_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__build_react_loadable_json__);
var _jsxFileName = '/Users/soutomario/Desktop/twitelum-ssr-modelo/src/server/index.js';
// Coisas do Node



// Lib responsável por AJAX


// Helpers para o SSR


// Coisas do React




// Coisas da Aplicação



// Coisas do Redux



// Coisas do React Loadable (Componentes Assincronos)




var assets = __webpack_require__("./build/assets.json");

var server = __WEBPACK_IMPORTED_MODULE_0_express___default()();

// Cookies Support
server.use(__WEBPACK_IMPORTED_MODULE_1_cookie_parser___default()());

server.disable('x-powered-by').use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static("/Users/soutomario/Desktop/twitelum-ssr-modelo/public")).get('/*', function (request, resposta) {
  var status = 200;

  // 1 - Extrai a rota ativa
  var activeRoute = Object(__WEBPACK_IMPORTED_MODULE_3__ssr_helpers_js__["c" /* getActiveRouteFromRoutes */])(request.url, __WEBPACK_IMPORTED_MODULE_8__routes__["a" /* default */]);

  // 2 - Precisamos garantir que a rota 404 existe na aplicação.
  if (!activeRoute) {
    resposta.send("Você deve criar uma rota que represente a 404 com o path='*'.");
    return false;
  }

  // 3 - Define um redirect caso necessário
  if (activeRoute.props.render) {
    Object(__WEBPACK_IMPORTED_MODULE_3__ssr_helpers_js__["a" /* doRedirect */])(activeRoute, resposta.redirect);
    return false;
  }

  // 4 - Extrai o componente
  Object(__WEBPACK_IMPORTED_MODULE_3__ssr_helpers_js__["d" /* getCurrentComponent */])(activeRoute.props).then(function (component) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__ssr_helpers_js__["b" /* extractInitialData */])(component, request);
  }).then(function (_ref) {
    var component = _ref.component,
        initialData = _ref.initialData;

    // Setup da aplicação no server (obrigatório)
    var markup = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_5_react_router_dom__["StaticRouter"],
      { context: initialData, location: request.url, __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      },
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__routes__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      })
    );
    // ./

    // // Configuração do Redux (opcional)
    // const storeInicial = configuraStore() // Pega o esqueleto da store do redux
    // const store = configuraStore({
    //   ...storeInicial.getState(),
    //   ...initialData  
    // }) // Cria a store, somente alterando o dado passado, mas mantendo o esqueleto

    // // Essa alteração deve ser feita, somente por conta do redux estar sendo aplicado no projeto
    // initialData = store.getState()

    // markup = (
    //   <Provider store={store}>
    //     {markup}
    //   </Provider>
    // )
    // // ./

    // Configuração do React Loadable (obrigatória)
    var modules = [];
    markup = Object(__WEBPACK_IMPORTED_MODULE_6_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_11_react_loadable__["Capture"],
      { report: function report(moduleName) {
          return modules.push(moduleName);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      },
      markup
    ));
    var bundles = Object(__WEBPACK_IMPORTED_MODULE_12_react_loadable_webpack__["getBundles"])(__WEBPACK_IMPORTED_MODULE_13__build_react_loadable_json___default.a, modules);
    var chunks = bundles.filter(function (bundle) {
      return bundle.file.endsWith('.js');
    });
    assets.chunks = chunks;
    // ./


    resposta.status(status).send('<!doctype html>\n          ' + Object(__WEBPACK_IMPORTED_MODULE_6_react_dom_server__["renderToStaticMarkup"])(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Html__["a" /* default */], { assets: assets, markup: markup, initialState: initialData, __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      }
    })));
  });
});

/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ }),

/***/ "./src/store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__ = __webpack_require__("babel-runtime/helpers/toConsumableArray");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_thunk__ = __webpack_require__("redux-thunk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_thunk__);





function tweetsReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { lista: [], tweetAtivo: {} };
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (action.type === 'CARREGA_TWEETS') {
        state.lista = action.tweets;
    }

    if (action.type === 'ADICIONA_TWEET') {
        state.lista = [action.novoTweet].concat(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default()(state.lista));
    }

    if (action.type === 'REMOVE_TWEET') {
        var listaDeTweetsAtualizada = state.lista.filter(function (tweet) {
            return tweet._id !== action.idTweetQueVaiSerRemovido;
        });
        state.lista = listaDeTweetsAtualizada;
    }

    if (action.type === 'LIKE') {
        var _listaDeTweetsAtualizada = state.lista.filter(function (tweet) {
            if (tweet._id === action.idTweetLikeado) {
                var likeado = tweet.likeado,
                    totalLikes = tweet.totalLikes;


                if (tweet.likeado) {
                    tweet.likes = tweet.likes.filter(function (like) {
                        return like.usuario.login !== action.liker;
                    });
                } else {
                    tweet.likes = [{ usuario: { login: action.liker } }].concat(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default()(tweet.likes));
                }

                tweet.likeado = !likeado;
                tweet.totalLikes = likeado ? totalLikes - 1 : totalLikes + 1;
            }
            return tweet;
        });

        var tweetAtivoAtualizado = _listaDeTweetsAtualizada.find(function (tweet) {
            return tweet._id === state.tweetAtivo._id;
        });

        return {
            tweetAtivo: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, tweetAtivoAtualizado) || {},
            lista: _listaDeTweetsAtualizada
        };
    }

    if (action.type === 'REMOVE_TWEET_ATIVO') {
        state.tweetAtivo = {};
        // return Object.assign({}, state, {
        //     tweetAtivo: {}
        // })
    }

    if (action.type === 'ADD_TWEET_ATIVO') {
        state.tweetAtivo = action.tweetSelecionado;
    }

    return state;
}

function notificacaoReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (action.type === 'ADD_NOTIFICACAO') {
        state = action.notificacao;
    }
    if (action.type === 'REMOVE_NOTIFICACAO') {
        state = '';
    }
    return state;
}

function usuarioReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return state;
}

var configuraStore = function configuraStore(preloadedState) {
    return Object(__WEBPACK_IMPORTED_MODULE_2_redux__["createStore"])(Object(__WEBPACK_IMPORTED_MODULE_2_redux__["combineReducers"])({
        tweets: tweetsReducer,
        notificacao: notificacaoReducer,
        usuario: usuarioReducer
    }), preloadedState, Object(__WEBPACK_IMPORTED_MODULE_2_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_3_redux_thunk___default.a));
};
// window.store = store
/* unused harmony default export */ var _unused_webpack_default_export = (configuraStore);

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

};
//# sourceMappingURL=0.15c90134456b74b0ac07.hot-update.js.map